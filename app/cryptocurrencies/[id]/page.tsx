import { CoinStatsAndChart } from "@/components/crypto/CoinStatsAndChart";
import { getCoinData } from "@/utils/crypto/utils";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const coinData = await getCoinData(params.id);
  if (
    "error" in coinData.coinDataById ||
    Object.keys(coinData.simplePriceData).length === 0 ||
    "status" in coinData.simplePriceData
  ) {
    notFound();
  } else {
    return (
      <section className="chart__container">
        <CoinStatsAndChart coinData={coinData} coinName={params.id} />
      </section>
    );
  }
}
