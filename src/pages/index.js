import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Home({ products }) {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.node.id}>
              <a href={product.node.slug}>{product.node.name}</a>
            </li>
          );
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
