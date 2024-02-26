/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header className="border-gray-60 flex h-20 w-full border px-[60px] py-[30px]">
      <section className="flex w-full items-center justify-between">
        <img
          src="/assets/kx_logo.svg"
          width={96}
          height={24}
          alt="koinx logo"
        />
        <nav>
          <ul className="flex items-center gap-8 text-base font-semibold">
            <li>Crypto Taxes</li>
            <li>Free Tools</li>
            <li>Resource Center</li>
            <li>
              <button className=" rounded-lg bg-blue-60 px-8 py-3 text-white">
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
