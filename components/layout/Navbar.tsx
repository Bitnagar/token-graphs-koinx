/* eslint-disable @next/next/no-img-element */
"use client";

export default function Navbar() {
  function handleMenuOpen() {
    const menu = document.querySelector(".menu__overlay");
    if (menu) menu.classList.remove("hidden");
    document.querySelector(".wrapper")?.classList.add("overflow-y-hidden");
  }

  return (
    <nav className="">
      <img
        src="/assets/hamburger.svg"
        alt="hamburger menu icon"
        width={20}
        height={13}
        className="cursor-pointer lg:hidden"
        onClick={handleMenuOpen}
      />
      <MenuOverlay />
      <ul className="hidden items-center gap-8 text-base font-semibold lg:flex">
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
  );
}

function MenuOverlay() {
  function handleMenuClose() {
    const menu = document.querySelector(".menu__overlay");
    if (menu) menu.classList.add("hidden");
    document.querySelector(".wrapper")?.classList.remove("overflow-y-hidden");
  }
  return (
    <div className="menu__overlay absolute left-0 top-0 z-50 hidden h-full w-full bg-black/65 backdrop-blur-sm lg:hidden">
      <div className="relative flex h-full w-full items-center justify-center p-4">
        <div className="absolute right-4 top-4">
          <span onClick={handleMenuClose}>
            <img
              src="/assets/close.svg"
              alt="close menu icon"
              height={20}
              width={20}
              className="cursor-pointer"
            />
          </span>
        </div>
        <div>
          <ul className="flex flex-col items-center justify-evenly gap-4 text-base font-semibold text-white ">
            <li>Crypto Taxes</li>
            <li>Free Tools</li>
            <li>Resource Center</li>
            <li>
              <button className=" rounded-lg bg-blue-60 px-8 py-3 text-white">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
