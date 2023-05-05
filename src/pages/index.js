import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ProductPreview } from "@/components/ProductPreview";

export default function Home({ products }) {
  console.log("products", products);

  // create a viewModel to gain control over the shape of the data and remove the logic from the UI
  let viewModel = { counter: 0, products: [] };
  products.forEach((product) => {
    const { node } = product;
    viewModel.counter++;

    let productVm = {
      key: viewModel.counter,
      name: node.name,
      id: node.id,
      slug: node.slug,
    };
    viewModel.products.push(productVm);
  });

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <ul>
        {viewModel.products.map((productVm, index) => {
          console.log("productVm", productVm);
          return <ProductPreview vm={productVm} key={productVm.key} />;
        })}
      </ul>
    </main>
  );
}

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://unicorn-staging.eu.saleor.cloud/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetProducts {
        products(channel: "uk", first: 10) {
          totalCount
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data.products.edges,
    },
  };
};
