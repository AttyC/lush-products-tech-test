import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";

const queryProductBySlug = gql`
  query ($slug: String!) {
    product(channel: "uk", slug: $slug) {
      id
      name
      slug
      category {
        name
      }
      media {
        id
        url
        alt
        sortOrder
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
  const { name, id, slug } = data.product;

  return (
    <div>
      <div className='detail-container'>
        <h3>Welcome to GraphQL detail page</h3>
        <p>id: {id}</p>
        <p>slug: {slug}</p>
        <p>name: {name}</p>
      </div>
      <Link href={"/"}>
        <button>Back</button>
      </Link>
    </div>
  );
  return <>hello</>;
}
