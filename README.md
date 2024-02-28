# KoinX Token Graphs

## Built by [Shivam Bhatnagar](https://www.bitnagar.dev)

This project was built as a hiring assignment for KoinX.

All the features that were in the assignment specification has been built, including the optional features.

This project was built using Next.js and TailwindCSS. No additional libraries, such as data fetching or animation/component libraries were used.

## Live Demo

You can access the live demo here:

[token-graphs-koinx.vercel.app/cryptocurrencies/bitcoin](https://token-graphs-koinx.vercel.app/cryptocurrencies/bitcoin)

> [!NOTE]
> Visit `/cryptocurrencies/[id]` route in-order to view the assignment. Type the ID of the crypto you want to see in place of `[id]`. OR you can click on any crypto shown in the `YouMayAlsoLike` component.

## Approach

The project is built while keeping scalability in mind. The `/cryptocurrencies` route is separate from other logic. Root/Landing page can be customized as per needs. `/cryptocurrencies/[id]` dynamic route takes an ID of the cryptocurrency and renders its details. You can click on the crypto shown in the `YouMayAlsoLike` component and the page will show its details.

The commits used in the project have the types: `<feat>` `<fix>` `<chore>` etc. I have skipped writing the scope because of added complexity and confusions

> [!WARNING]
> The Trading View Chart might not show data for some cryptocurrencies due to symbol mismatch. Trading View requires a different set of symbol than the symbol supplied by the `coingecko` API.

---
