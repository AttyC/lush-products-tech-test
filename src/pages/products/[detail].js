import { gql } from "@apollo/client";
import Client from "@/utils/Client";
import Layout from "@/components/Layout";
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
      variants {
        margin
        sku
        quantityAvailable
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

  const { data } = await Client.query({
    url: Client,
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
  const { name, media, category, description, rating, variants, weight } =
    data.product;

  console.log("ghsgaHJS", data.product);
  const stars = Math.round(rating);
  const productWeight =
    weight !== null
      ? {
          value: weight.value,
          unit: weight.unit,
        }
      : {
          value: " not listed",
          unit: null,
        };

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

  console.log("hello!", productWeight);

  return (
    <Layout>
      <main className={`min-h-screen container mx-auto`}>
        <section className={` rounded-lg border border-gray-300`}>
          <h1 className={`text-4xl lg:px-8 lg:py-4 bg-gray-100`}>{name}</h1>
          <Gallery vm={imagesVM} />
          <div className={`lg:flex`}>
            <ProductDescription data={{ category, stars, descriptionText }} />
            <Specification data={{ productWeight, variants }} />
          </div>
        </section>
        <BackHomeButton />
      </main>
    </Layout>
  );
}
