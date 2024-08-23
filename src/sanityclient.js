import { sanityClient } from "sanity:client";

export async function getTovars() {
  const query = `*[_type == "tovar"]{
    _id,
    full_title,
    short_title,
    brand,
    first_description,
    price_with_work,
    work_description,
    image1{
      asset->{
        url
      }
    },
    image2{
      asset->{
        url
      }
    },
    AvitoURL
  }`;

  try {
    const data = await sanityClient.fetch(query);
    return data;
  } catch (error) {
    console.error("Failed to fetch data from Sanity:", error);
    throw error;
  }
}
export async function getOtzivi() {
  const otzivi = await sanityClient.fetch('*[_type == "otziv"]');
  return otzivi;
}

export async function getUslugi() {
  const query = `*[_type == "usluga"]{
    _id,
    full_title,
    short_title,
    question,
    price,
    paragraph1,
    paragraph2,
    paragraph3,
    image1{
      asset->{
        url
      }
    },
    image2{
      asset->{
        url
      }
    }
  }`;

  try {
    const data = await sanityClient.fetch(query);
    return data;
  } catch (error) {
    console.error("Failed to fetch data from Sanity:", error);
    throw error;
  }
}

export async function getItem(id) {
  const query = `*[_id == "${id}"]{
      _id,
      full_title,
      paragraph1,
      paragraph2,
      paragraph3,
      price,
      question,
      short_title,
      brand,
      first_description,
      price_with_work,
      work_description,
      image1{
        asset->{
          url
        }
      },
      image2{
        asset->{
          url
        }
      },
      AvitoURL
    }`;

  try {
    const items = await sanityClient.fetch(query);
    return items[0];
  } catch (error) {
    console.error("Failed to fetch item from Sanity:", error);
    throw error;
  }
}
