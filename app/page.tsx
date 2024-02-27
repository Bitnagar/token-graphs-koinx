/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="flex grow items-center justify-center p-4">
      <section className="flex h-fit w-fit flex-col items-center justify-center gap-5">
        <h1 className="text-pretty text-center text-3xl font-bold">
          This could be a potential landing page, if you want?! 😁
        </h1>
        <a
          href="/cryptocurrencies/bitcoin"
          className="rounded-lg bg-blue-60 p-2 text-base font-medium text-white lg:p-4 lg:text-lg"
        >
          Take me to the demo page. {"-->"}
        </a>
        <div className="w-full  lg:w-1/2">
          <p className="mt-5 text-balance text-center text-base font-medium leading-8">
            Hi. I am Shivam Bhatnagar. I built this demo. Check out my{" "}
            <a className="underline" href="https://www.bitnagar.dev/">
              Portfolio.
            </a>{" "}
            I love user centric software application programming. Product
            building basically :P. Let's build something amazing together.
          </p>
        </div>
      </section>
    </main>
  );
}
