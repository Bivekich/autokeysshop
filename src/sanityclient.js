import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:

// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "20ujrfez",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getTovars() {
  const tovars = await client.fetch('*[_type == "tovar"]');
  return tovars;
}
export async function getOtzivi() {
  const otzivi = await client.fetch('*[_type == "otziv"]');
  return otzivi;
}
// uses GROQ to query content: https://www.sanity.io/docs/groq

export async function getUslugi() {
  const uslugi = await client.fetch('*[_type == "usluga"]');
  return uslugi;
}
export async function getItem(id) {
  const item = await client.fetch(`*[_id == "${id}"]`);
  return item[0];
}
// export async function getTovars() {
//   const posts = await client.fetch('*[_type == "tovar"]');
//   return posts;
// }
