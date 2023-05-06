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

Open [http://localhost:3000](http://localhost:3000) with your browser to view and interact with the app.

## Decisions

- NextJS: I chose to use Next.js, which I haven't used before, rather than Gatsby or using React without server-side rendering, whic I have used a lot.
- Apollo Client for GraphQL queries: I haven't used Apollo for GraphQL before, as it's 'baked in' to Gatsby, which is where I've used GraphQL most. Another option was to use `fetch()`, which might have been a bit simpler, but I've used that a lot in other React apps and was up for learning something new.
- Tailwind for the CSS - it came with the Next installaion. I usually ise styled-components abut for speed and also to try something new (again!) I chose to use Tailwind.

## With more time

- Add tests - I started with Jest after I'd set up most of the basics but there is a conflict woth the Apollo setup and Jest. I tred installing cross-fetch but there were a few more errors which I didn't get through. With time I would consider either removing Apollo Client and using native fetch(), or debugging the conflicts described above.
- Display a grid for each category order
- More sorting options ie a select / buttons for filtering and sorting on different criteria - star ratings, category, flag where items are not available.
- Sale listings for products at sale or dicsounted prices.
