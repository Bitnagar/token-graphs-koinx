/* eslint-disable @next/next/no-img-element */
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex h-fit w-full border border-gray-60 px-4 py-6 lg:px-[60px] lg:py-5">
      <section className="flex w-full items-center justify-between">
        <img
          src="/assets/kx_logo.svg"
          width={96}
          height={24}
          alt="koinx logo"
        />
        <Navbar />
      </section>
    </header>
  );
}
