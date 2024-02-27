# KoinX Token Graphs

## Built by [Shivam Bhatnagar](https://www.bitnagar.dev)

This project was built as a hiring assignment for KoinX.

All the features that were in the assignment specification has been built, including the optional features.

This project was built using Next.js and TailwindCSS. No additional library, such as data fetching or animation/component libraries were used.

## Live Demo

You can access the live demo here:

[token-graphs-koinx.vercel.app/cryptocurrencies/bitcoin](https://token-graphs-koinx.vercel.app/cryptocurrencies/bitcoin)

> **Note**
> Visit `/cryptocurrencies/[id]` route in-order to view the assignment. Type in the required ID of a cryptocurrencies in place of `[id]`.

I will be updating the landing page and `/cryptocurrencies` page shortly. They were not required in the assignment. You can check in a few hours.

## Approach

The project is built while keeping scalability in mind. The `/cryptocurrencies` route is separate from other logic. Root/Landing page can be customized as per needs. `/cryptocurrencies/[id]` dynamic route takes an ID of the cryptocurrency and renders its details. You can click on the crypto shown in the `YouMayAlsoLike` component and it will take you its details. Rest of the details you can check in readme.

The commits used in the project have the types: `<feat>` `<fix>` `<chore>` etc. I have skipped writing the scope because of added complexity and confusions

> **Warning**
> : The Trading View Chart might not show data for some cryptocurrencies due to symbol mismatch. Trading View requires a different set of symbol than the symbol supplied by the coingecko api.
