import { CoinStatsAndChart } from "@/components/crypto/CoinStatsAndChart";
import { getCoinData } from "@/utils/crypto/utils";
export default async function Page({ params }: { params: { id: string } }) {
  const coinData = await getCoinData(params.id);
  return (
    <section>
      <CoinStatsAndChart coinData={coinData} coinName={params.id} />
    </section>
  );
}
