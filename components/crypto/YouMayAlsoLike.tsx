/* eslint-disable @next/next/no-img-element */
import { GetTrendingCoins } from "@/utils/crypto/utils";
import Carousel from "./Carousel";

export async function YouMayAlsoLike() {
  const data = await GetTrendingCoins();

  if (data.status !== 200) {
    return (
      <div className="youMayAlsoLike__component h-full overflow-hidden rounded-lg bg-white p-16">
        <h1 className="mb-2 text-lg font-semibold lg:text-2xl">
          Oops! Could not fetch Trending Coins. Try reloading the page.
        </h1>
      </div>
    );
  }

  const { coins } = data.data;

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
