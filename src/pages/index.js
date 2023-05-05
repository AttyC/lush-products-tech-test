import Image from "next/image";
import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ProductPreview } from "@/components/ProductPreview";

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
    };
    viewModel.products.push(productVm);
  });

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <h1>Check out our latest products!</h1>
      <ul>
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
        }
      }
    }
  }
`;

export async function getServerSideProps() {
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
