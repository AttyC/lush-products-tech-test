This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Decisions

- NextJS: I chose to use Next.js, which I haven't used before, rather than Gatsby or using React without server-side rendering, whic I have used a lot.
- Apollo Client for GraphQL queries: I haven't used Apollo for GraphQL before, as it's 'baked in' to Gatsby, which is where I've used GraphQL most. Another option was to use `fetch()`, which might have been a bit simpler, but I've used that a lot in other React apps and was up for learning something new.

## With more time

Add tests - I started with Jest
Display a grid for each category order
Add a where you can buy button
