import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ProductPreview } from "@/components/ProductPreview";
import placeholderImage from "../../assets/coming-soon-lush.png";

export default function Product({ data }) {
  const allProducts = data.products.edges;

  // create a viewModel to gain control over the shape of the data and remove the logic from the UI
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
    };
    viewModel.products.push(productVm);
  });

  return (
    <main className={`flex min-h-screen flex-col items-center`}>
      <h1 className={`py-2 text-2xl`}>Check out our latest products!</h1>
      <ul
        className={`flex flex-wrap min-h-screen items-center justify-center lg:mx-16`}
      >
        {viewModel.products.map((productVm) => (
          <ProductPreview vm={productVm} key={productVm.key} />
        ))}
      </ul>
    </main>
  );
}

export const query = gql`
  {
    products(channel: "uk", first: 10) {
      edges {
        node {
          id
          name
          slug
          category {
            name
          }
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
  // import this later
  const client = new ApolloClient({
    uri: "https://unicorn-staging.eu.saleor.cloud/graphql/",
    cache: new InMemoryCache(),
  });
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
