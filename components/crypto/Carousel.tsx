"use client";
/* eslint-disable @next/next/no-img-element */
import { RefObject, useRef } from "react";
import { ChangeIndicator } from "./ChangeIndicator";
export default function Carousel({ coins }: { coins: any }) {
  const containerRef: RefObject<HTMLDivElement> = useRef(null);

  function NextImage() {
    const container = containerRef.current;
    const card = document.getElementById("carousel__coinCard");
    const cardWidth = card?.getBoundingClientRect().width;
    if (container && card && cardWidth) {
      container.scrollLeft += cardWidth;
    }
  }
  function prevImage() {
    const container = containerRef.current;
    const card = document.getElementById("carousel__coinCard");
    const cardWidth = card?.getBoundingClientRect().width;
    if (container && card && cardWidth) {
      container.scrollLeft -= cardWidth;
    }
  }

  return (
    <>
      <div
        ref={containerRef}
        id="carousel__container"
        className="flex w-screen gap-4 overflow-x-scroll scroll-smooth"
      >
        {coins.map((coin: any, key: number) => {
          return <CoinCard coin={coin} key={key} />;
        })}
      </div>
      <button
        onClick={prevImage}
        className="border-gray-60 absolute -left-2 top-[55%] cursor-pointer rounded-full border bg-white px-2 py-0.5 active:bg-gray-70 lg:-left-4"
      >
        {"<"}
      </button>
      <button
        onClick={NextImage}
        className="border-gray-60 absolute -right-2 top-[55%] cursor-pointer rounded-full border bg-white px-2 py-0.5 active:bg-gray-70 lg:-right-4 xl:-right-10"
      >
        {">"}
      </button>
    </>
  );
}

function CoinCard({ coin }: any) {
  return (
    <div
      id="carousel__coinCard"
      className="border-gray-60 min-w-fit rounded-lg border p-4"
    >
      <div className="flex flex-col">
        <div>
          <div className="mb-2 flex items-center">
            <img
              src={coin.item.small}
              alt="logo"
              width={24}
              height={24}
              className="self-center"
            />
            <span className="ml-1 text-[10px] lg:ml-2 lg:text-base">
              {coin.item.symbol}
            </span>
            <ChangeIndicator
              className="ml-1 text-[10px] font-normal lg:ml-5 lg:text-sm"
              priceChange={coin.item.data["price_change_percentage_24h"]["usd"]}
            />
          </div>
          <span className="text-xs font-medium lg:text-xl">
            {coin.item.data.price.toLocaleString()}
          </span>
        </div>
        <img
          src={coin.item.data.sparkline}
          alt={coin.item.name}
          className="mt-2 self-center"
        />
      </div>
    </div>
  );
}
