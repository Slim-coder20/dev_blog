import { connectToDB } from "@/lib/utils/db/connectToDB";

export async function addPost(formData) {
  const { title, markdownArticle } = Object.formEntries(formData);
  try {
    await connectToDB();
    const newPost = new Post({
      title,
      markdownArticle,
    });
    const savedPost = await newPost.save();
    console.log("Post saved succefully!");
    return { success: true, slug: savedPost.slug };
  } catch (error) {
    console.log("Error while creating the post: ", error);
    throw new Error(
      error.message || "An error occured while creating the post ",
    );
  }
}
