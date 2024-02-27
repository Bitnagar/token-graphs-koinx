/* eslint-disable @next/next/no-img-element */
import { GetTrendingCoins } from "@/utils/crypto/utils";
import Carousel from "./Carousel";

export async function YouMayAlsoLike() {
  const { coins } = await GetTrendingCoins();
  return (
    <div className="youMayAlsoLike__component h-fit overflow-hidden rounded-lg bg-white p-[50px_10px_20px_10px] lg:p-16">
      <div className="relative mb-8">
        <h1 className="mb-2 text-lg font-semibold lg:text-2xl">
          You May Also Like
        </h1>
        <Carousel coins={coins} />
      </div>
      <div className="relative">
        <h1 className="mb-2 text-lg font-semibold lg:text-2xl">
          Trending Coins
        </h1>
        <Carousel coins={coins} />
      </div>
    </div>
  );
}
