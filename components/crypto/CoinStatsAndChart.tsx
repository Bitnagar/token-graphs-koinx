/* eslint-disable @next/next/no-img-element */
import {
  CoinSimplePriceType,
  GetCoinByIdDataType,
} from "@/types/crypto/crypto.types";
import { TradingViewWidget } from "../widgets/TVCoinChart";
import { ChangeIndicator } from "./ChangeIndicator";

type CoinDataType = {
  simplePriceData: CoinSimplePriceType;
  coinDataById: GetCoinByIdDataType;
};

export function CoinStatsAndChart({
  coinData,
  coinName,
}: {
  coinData: CoinDataType;
  coinName: string;
}) {
  return (
    <div className="flex h-[760px] max-w-[884px] flex-col rounded-lg bg-white p-6">
      <CoinDetails coinData={coinData} coinName={coinName} />
      <TradingViewWidget />
    </div>
  );
}

function CoinDetails({
  coinData,
  coinName,
}: {
  coinData: CoinDataType;
  coinName: string;
}) {
  const { simplePriceData, coinDataById } = coinData;
  const coin = simplePriceData[coinName];
  const { image, symbol, market_cap_rank: rank } = coinDataById;
  return (
    <div className="border-b-gray-60 mb-6 border-b-[2px] pb-6">
      <div className="mb-10 flex items-center gap-3">
        <img
          src={image.large}
          alt={coinName}
          width={36}
          height={36}
          className="self-center"
        />
        <div className="flex">
          <h1 className="mr-1 flex items-center gap-2 text-2xl font-bold text-gray-100">
            {coinName.charAt(0).toUpperCase() + coinName.slice(1)}
            <span className="text-base font-semibold text-gray-80">
              {symbol.toUpperCase()}
            </span>
          </h1>
          <span className="ml-4 rounded-lg bg-gray-70 p-[10px] text-white">
            Rank #{rank}
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <span className="text-3xl font-semibold text-gray-100">
            ${coin.usd.toLocaleString()}
          </span>
          <ChangeIndicator
            className="ml-8 text-base font-medium"
            change={coin.usd_24h_change}
          />
          <span className="ml-3 font-medium text-gray-70">(24H)</span>
        </div>
        <p className="text-base font-medium text-gray-100">
          ₹ {coin.inr.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
