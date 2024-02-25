/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header className="h-20 w-full px-[60px] py-[28px]">
      <section className="flex items-center justify-between">
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
              <button className=" bg-blue-60 rounded-lg px-8 py-3 text-white">
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
