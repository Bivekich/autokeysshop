import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '20ujrfez',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
export async function getTovars() {
  const tovars = await client.fetch('*[_type == "tovar"]');
  return tovars;
}
export async function getOtzivi() {
  const otzivi = await client.fetch('*[_type == "otziv"]');
  return otzivi;
}

export async function getUslugi() {
  const uslugi = await client.fetch('*[_type == "usluga"]');
  return uslugi;
}
export async function getItem(id) {
  const item = await client.fetch(`*[_id == "${id}"]`);
  return item[0];
}
