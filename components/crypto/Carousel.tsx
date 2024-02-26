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
        className="flex  gap-4 overflow-x-scroll scroll-smooth"
      >
        {coins.map((coin: any, key: number) => {
          return <CoinCard coin={coin} key={key} />;
        })}
      </div>
      <button
        onClick={prevImage}
        className="border-gray-60 absolute -left-4 top-[55%] cursor-pointer rounded-full border bg-white px-2 py-0.5"
      >
        {"<"}
      </button>
      <button
        onClick={NextImage}
        className="border-gray-60 absolute -right-4 top-[55%] cursor-pointer rounded-full border bg-white px-2 py-0.5"
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
            <span className="ml-1">{coin.item.symbol}</span>
            <ChangeIndicator
              className="ml-5 text-xs font-normal"
              priceChange={coin.item.data["price_change_percentage_24h"]["usd"]}
            />
          </div>
          <span className="text-xl font-medium">
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
