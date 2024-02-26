/* eslint-disable @next/next/no-img-element */
import { GetTrendingCoins } from "@/utils/crypto/utils";
import Carousel from "./Carousel";

export async function YouMayAlsoLike() {
  const { coins } = await GetTrendingCoins();
  return (
    <div className=" bg-white p-16">
      <div className="relative mb-4">
        <h1 className="mb-4 text-2xl font-semibold">You May Also Like</h1>
        <Carousel coins={coins} />
      </div>
      <div className="relative mb-4">
        <h1 className="mb-4 text-2xl font-semibold">Trending Coins</h1>
        <Carousel coins={coins} />
      </div>
    </div>
  );
}
