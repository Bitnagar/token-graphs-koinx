import {
  CoinSimplePriceType,
  GetCoinByIdDataSuccessType,
} from "@/types/crypto/crypto.types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export async function getCoinData(coinName: string) {
  const simplePriceData = await getCoinSimplePriceData(coinName);
  const coinDataById = await getCoinDataById(coinName);
  return { simplePriceData: simplePriceData, coinDataById: coinDataById };
}

export async function getCoinSimplePriceData(coinName: string) {
  const resp = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=inr%2Cusd&include_24hr_change=true`,
  );
  const data: CoinSimplePriceType = await resp.json();

  return data;
}

export async function getCoinDataById(coinName: string) {
  const resp = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false`,
  );
  const data: GetCoinByIdDataSuccessType = await resp.json();
  return data;
}

export async function GetTrendingCoins() {
  const resp = await fetch("https://api.coingecko.com/api/v3/search/trending");
  const data = await resp.json();
  return { data: data, status: resp.status };
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
