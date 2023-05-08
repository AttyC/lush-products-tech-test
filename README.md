# Welcome to Luxuriate

### Visit the site here: https://lush-products-tech-test.vercel.app/

### This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and deplyed to Vercel from GitHub.

---

### Run the app locally

Unzip the folder provided and open in your IDE of choice,

OR

`git clone https://github.com/AttyC/lush-products-tech-test` - you will need permission as it's a private repository.

`npm install`

Open [http://localhost:3000](http://localhost:3000) with your browser to view and interact with the app.

## Decisions

- NextJS: I chose to use Next.js to try it out, as lush use Next and it comes with server-side rendering, as requested in the specification (see below).

- Apollo Client for GraphQL queries: I haven't used Apollo for GraphQL before, as it's 'baked in' to Gatsby, which is where I've used GraphQL most. Another option was to use `fetch()`, which might have been a bit simpler, but I've used that a lot in other React apps and was up for learning something new. As it turns out, this made testing the app tricky as there were a lot of conflicts.
- Tailwind for the CSS - it came with the Next installaion. I usually ise styled-components abut for speed and also to try something new (again!) I chose to use Tailwind.

## With more time

- Add tests - I started with Jest after I'd set up most of the basics but there is a conflict with the Apollo setup and Jest. I tried installing cross-fetch but there were a few more errors which I didn't get through. With time I would consider either removing Apollo Client and using native fetch(), or debugging the conflicts described above.
-
- Display a separate grid for each category order
- Improve the gallery layout on the Product Detail page
- More sorting and filtering options, e.g. more select / buttons for filtering on different criteria - star ratings, category, flag where items are not available.
- Sale listings for products at sale or discounted prices.
- Decide whether to show currency in 3-letter code or currency cymbole for ecah country, create a helper file
