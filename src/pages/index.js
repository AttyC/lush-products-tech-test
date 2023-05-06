import { gql } from "@apollo/client";
import client from "@/utils/Client";
import Layout from "@/components/Layout";
import { ProductPreview } from "@/components/ProductPreview";
import placeholderImage from "../../assets/coming-soon-lush.png";
import { ProductGrid } from "@/components/ProductGrid";

export default function Home({ data }) {
  const allProducts = data.products.edges;

  // create a viewModel to gain control over the shape of the data and remove the logic from the UI
  // I've used this method this to illustrate learning from the UI Architecture course -
  // it may look over-engineered but when you get ito the pattern of it, it becomes second nature!

  let viewModel = { counter: 0, products: [] };
  allProducts.forEach((product) => {
    const { node } = product;
    viewModel.counter++;

    let productVm = {
      key: viewModel.counter,
      name: node.name,
      id: node.id,
      slug: node.slug,
      category: node.category.name,
      thumbnail: !node.thumbnail
        ? {
            url: placeholderImage,
            alt: "image coming soon",
          }
        : node.thumbnail,
      images: !node.media
        ? [
            {
              id: -1,
              url: placeholderImage,
              alt: "image coming soon",
              sortOrder: 0,
            },
          ]
        : node.media.map((images) => {
            return {
              id: images.id,
              url: images.url,
              alt: images.alt,
              sortOrder: images.sortOrder,
            };
          }),
      rating: Math.round(node.rating),
    };
    viewModel.products.push(productVm);
  });

  return (
    <Layout>
      <main className={`flex min-h-screen flex-col items-center`}>
        <h1 className={`py-4 text-2xl`}>
          Pamper yourself with our skin-loving range.
        </h1>
        <ProductGrid data={viewModel} />
        <ul
          className={`flex flex-wrap min-h-screen items-center justify-center lg:mx-16 py-2`}
        >
          {viewModel.products.map((productVm) => (
            <ProductPreview vm={productVm} key={productVm.key} />
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export const query = gql`
  {
    products(channel: "uk", first: 40) {
      totalCount
      edges {
        node {
          id
          name
          slug
          category {
            name
          }
          rating
          thumbnail {
            url
            alt
          }
        }
      }
    }
  }
`;

export async function getServerSideProps() {
  const { data } = await client.query({
    uri: client.uri,
    query: query,
  });

  return {
    props: {
      data,
    },
  };
}
