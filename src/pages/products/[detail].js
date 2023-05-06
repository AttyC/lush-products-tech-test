import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";

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
  const { name, media, category, description, rating } = data.product;

  // clean up the description
  let descriptionModel = [];

  // convert to JSON so we can pull out what we want
  let descriptionJSON = JSON.parse(description);
  let counter = 0;

  descriptionJSON.blocks.forEach((descriptionPart) => {
    counter++;
    let descVm = {
      id: counter,
      text: descriptionPart.data.text,
    };
    descriptionModel = [...descriptionModel, descVm];
  });

  const descriptionText = descriptionModel.map((text) => {
    return (
      <li key={text.id} dangerouslySetInnerHTML={{ __html: text.text }}></li>
    );
  });

  return (
    <main className={`flex min-h-screen flex-col items-center`}>
      <h1 className={`py-4 px-4 text-2xl`}>{name}</h1>
      <p className={`text-sm`}>{category.name}</p>
      <div className=''>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src={media[0].url}
          alt={media[0].alt}
          width={300}
          height={100}
          priority
        />
      </div>
      <div className={`py-4 px-4 bg-gray-100`} id='product-description'>
        <h1 className={`py-4 px-4 text-2xl`}>{name}</h1>
        <p>{category.name}</p>
        <p>Stars: {rating}</p>
        {descriptionText}
      </div>
      <Link href={"/"}>
        <button>Back</button>
      </Link>
    </main>
  );
}

// let wtf = {
//   time: 1681381260951,
//   blocks: [
//     {
//       id: "zX49XoM32d",
//       data: {
//         text: "\u201cIt's very unique this one. Sweet and spicy, but also with a bit of earthiness to it. I had the breeze catch my hair and received quite a few compliments from my coworkers inquiring about the scent. If you like the Beautiful shower gel, you'll love 1000 Kisses Deep.\u201d <i>-&nbsp;Tanyaslogic</i>",
//       },
//       type: "paragraph",
//     },
//     {
//       id: "bIzMBNGGuS",
//       data: {
//         text: "\u201cI was gambling choosing this fragrance, and when its arrived yesterday I was really excited. and all I can tell you, I've chosen the very best one :) fruity, warm earthy fragrance, like a hug. Last long on my skin. I was a Karma fan for many years, and Lust and Vanillary .... but this scent is truly my favourite. Thank you\u201d<i> -&nbsp;beebiegelbauer_7125018&nbsp;</i>",
//       },
//       type: "paragraph",
//     },
//     {
//       id: "TOL9dgILp1",
//       data: {
//         text: "\u201cComplex, musky and resonant. Whenever I smell this I'm immediately taken back to the period in my life that I wore it. Its a scent you want to bury your head into; warming, romantic, sensual yet all together calming.\u201d <i>-&nbsp;skin__care</i><br><br>",
//       },
//       type: "paragraph",
//     },
//     {
//       id: "EpjU3wjU9l",
//       data: { text: "<b>How to use:</b><b></b><br>" },
//       type: "paragraph",
//     },
//     {
//       id: "qg8_9UKJng",
//       data: {
//         text: "This fragrance has you at first breath with a spark of clean mandarin to lift your heart, followed by a deep and distinctive amber perfume. Spritz yourself, it will hold your hand &amp; never let go....",
//       },
//       type: "paragraph",
//     },
//   ],
//   version: "2.24.3",
// };
