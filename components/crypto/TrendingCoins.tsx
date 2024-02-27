/* eslint-disable @next/next/no-img-element */
import { memo } from "react";
import { ChangeIndicator } from "./ChangeIndicator";
import { GetTrendingCoins } from "@/utils/crypto/utils";

async function TrendingCoins({ limit }: { limit: number }) {
  const data = await GetTrendingCoins();
  if (data.status !== 200) {
    return (
      <div className="rounded-lg bg-white p-10">
        <h1 className="mb-2 w-fit text-wrap font-semibold">
          Oops! Could not fetch Trending Coins. <br></br>Try reloading the page.
        </h1>
      </div>
    );
  }

  const { coins } = data.data;

  return (
    <div className="w-full rounded-lg bg-white p-6 md:max-w-[427px]">
      <h1 className="mb-6 text-2xl font-bold">Trending Coins (24h)</h1>
      <div>
        {coins.map((coin: any, index: number) => {
          if (index >= limit) return;
          let priceChange =
            coin.item.data["price_change_percentage_24h"]["usd"];
          let { small: imageSrc, name, symbol } = coin.item;

          return (
            <div
              className="mb-6 flex items-center justify-between last:mb-0"
              key={index}
            >
              <div className="flex items-center gap-2">
                <span>
                  <img src={imageSrc} alt="logo" width={24} height={24} />
                </span>
                <span className="text-base font-medium">
                  {name}({symbol})
                </span>
              </div>
              <ChangeIndicator
                className="text-sm font-medium"
                priceChange={priceChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(TrendingCoins);
