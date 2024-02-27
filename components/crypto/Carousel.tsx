"use client";
/* eslint-disable @next/next/no-img-element */
import { RefObject, useRef } from "react";
import { ChangeIndicator } from "./ChangeIndicator";
import { useRouter } from "next/navigation";

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
        className="flex gap-4 overflow-x-scroll scroll-smooth"
      >
        {coins.map((coin: any, key: number) => {
          return <CoinCard coin={coin} key={key} />;
        })}
      </div>
      <button
        onClick={prevImage}
        className="absolute left-[8px] top-[55%] cursor-pointer rounded-full border border-gray-60 px-2 py-0.5 backdrop-blur-[1px] active:bg-gray-70"
      >
        {"<"}
      </button>
      <button
        onClick={NextImage}
        className="absolute right-[8px]  top-[55%] cursor-pointer rounded-full border border-gray-60 bg-white px-2 py-0.5 backdrop-blur-[1px] active:bg-gray-70"
      >
        {">"}
      </button>
    </>
  );
}

function CoinCard({ coin }: any) {
  const router = useRouter();
  return (
    <div
      id="carousel__coinCard"
      className="min-w-fit cursor-pointer rounded-lg border border-gray-60 p-4"
      onClick={() => {
        router.push(`${coin.item.id}`);
      }}
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
