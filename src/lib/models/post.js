import mongoose from "mongoose";
import { Truculenta } from "next/font/google";
import slugify from "slugify";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    markdownArticle: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    // Identifiant lisible pour l'URL (ex. "Mon Super Article" → /article/mon-super-article).
    // Généré automatiquement avant la sauvegarde ; unique pour éviter les collisions.
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
);

/**
 * Génération automatique du slug (hook Mongoose exécuté avant chaque .save()).
 *
 * 1. Si slug déjà défini → on ne touche à rien (permet de le fixer manuellement plus tard).
 * 2. Sinon, on dérive le slug du titre via slugify :
 *    - lower: true  → minuscules
 *    - strict: true → retire accents et caractères spéciaux
 * 3. On vérifie en base qu'aucun autre post n'a ce slug (this.constructor = modèle Post).
 * 4. En cas de doublon, on suffixe -1, -2, etc. jusqu'à trouver un slug libre.
 *
 * Ex. deux posts "Hello World" → hello-world puis hello-world-1
 */
postSchema.pre("save", async function (next) {
  if (!this.slug) {
    let slugCandidate = slugify(this.title, { lower: true, strict: true });
    let slugExist = await this.constructor.findOne({ slug: slugCandidate });
    let counter = 1;
    while (slugExist) {
      slugCandidate = `${slugCandidate}-${counter}`;
      slugExist = await this.constructor.findOne({ slug: slugCandidate });
      counter++;
    }
    this.slug = slugCandidate;
    console.log("Final slug", slugCandidate);
  }
});

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
