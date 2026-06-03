"use client";
import React from "react";
import { addPost } from "@/lib/serverActions/blog/postServerActions";

export default function page() {
 async function handleSubmit(e) {
   e.preventDefault();
   const formData = new FormData(e.target);

   // une boucle for pour récupérer les valeurs du formulaire dans la console //
   for (const [key, value] of formData.entries()) {
     console.log(key, value);
   }

   const result = await addPost(formData)
   // renitialise les champs du formulaire après la soumission du formulaire //
   e.target.reset();
 }

  return (
    <main className="u-main-conatainer bg-white p-7 mt-32 mb-44">
      <h1 className="text-4xl mb-4">
        {" "}
        Whrite an{" "}
        <span className="t-brand-accent text-3xl md:text-4xl">Article</span> ✍️
      </h1>
      <form onSubmit={handleSubmit} className="pb-6">
        <label htmlform="f-label">Title</label>
        <input
          type="text"
          name="title"
          className="shadow border rounded w-full p-3 mb-7 text-gray-700 focus:outline-slate-400"
          id="title"
          placeholder="title"
          required
        />
        <label htmlFor="markdownArticle" className="f-label">
          Write your using markdown - do not repeat the already given title
        </label>
        <a
          href="https://www.markdownguide.org/cheat-sheet/"
          target="_bkank"
          className="text-blue-500 block mb-4"
        >
          How to use markdown syntaxe ?
        </a>
        <textarea
          name="markdownArticle"
          id="markdownArticle"
          required
          className="min-h-44 text-xl shadow appearance-none border rounded w-full p-8 text-gray-700 mb-4 focus:outline-slate-400"
        ></textarea>
        <button className="u-btn-primary min-w-44">Submit</button>
      </form>
    </main>
  );
}
