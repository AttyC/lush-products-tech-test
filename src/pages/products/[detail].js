import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Image from "next/image";
import { ProductDetail } from "@/components/ProductDetail";
import { Gallery } from "@/components/Gallery";
import { ProductDescription } from "@/components/ProductDescription";
import { Specification } from "@/components/Specification";
import { BackHomeButton } from "@/components/BackHomeButton";

const queryProductBySlug = gql`
  query ($slug: String!) {
    product(channel: "uk", slug: $slug) {
      category {
        name
      }
      description
      media {
        id
        url
        alt
        sortOrder
      }
      name
      rating
      slug
      thumbnail {
        url
        alt
      }
      weight {
        unit
        value
      }
    }
  }
`;

export async function getServerSideProps({ params }) {
  const variables = {
    slug: params.detail,
  };
  // import this later
  const client = new ApolloClient({
    uri: "https://unicorn-staging.eu.saleor.cloud/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    url: client,
    query: queryProductBySlug,
    variables: variables,
  });

  return {
    props: {
      data,
    },
  };
}

export default function Detail({ data }) {
  const { name, media, category, description, rating, weight } = data.product;

  const productWeight = !!weight
    ? {
        value: weight.value,
        unit: weight.unit,
      }
    : " not listed";

  // create an Images viewModel to gain control over the shape of the data
  let imagesVM = { images: [] };
  media.forEach((image) => {
    let imageVm = {
      id: image.id,
      url: image.url,
      alt: image.alt,
      sortOrder: image.sortOrder,
    };
    imagesVM.images.push(imageVm);
  });

  // create an Description viewModel to gain control over the shape of the data

  let descriptionText;
  const parseDescriptionText = () => {
    let descriptionVM = [];
    let descriptionJSON = JSON.parse(description);
    let counter = 0;

    descriptionJSON.blocks.forEach((descriptionPart) => {
      counter++;
      let descVm = {
        id: counter,
        text: descriptionPart.data.text,
      };
      descriptionVM = [...descriptionVM, descVm];
    });

    descriptionText = descriptionVM.map((text) => {
      return (
        <li
          key={text.id}
          dangerouslySetInnerHTML={{ __html: text.text }}
          className={`my-4`}
        ></li>
      );
    });
  };
  if (!description) {
    descriptionText = "Description coming - watch this space!";
  } else {
    parseDescriptionText();
  }

  return (
    <main className={`min-h-screen container mx-auto`}>
      <section className={`flex flex-wrap rounded-lg border border-gray-300`}>
        <Gallery vm={imagesVM} />
        <ProductDescription
          data={{ name, category, rating, descriptionText }}
        />
      </section>
      <Specification weight={productWeight} />
      <BackHomeButton />
    </main>
  );
}
