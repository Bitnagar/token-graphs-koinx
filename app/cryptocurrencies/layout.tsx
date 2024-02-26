/* eslint-disable @next/next/no-img-element */

import TrendingCoins from "@/components/crypto/TrendingCoins";
import { YouMayAlsoLike } from "@/components/crypto/YouMayAlsoLike";
import { GetStarted } from "@/components/extras/GetStarted";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

type Props = { children: React.ReactNode };

export default async function CryptoDynamicIdLayout({ children }: Props) {
  return (
    <>
      <Breadcrumbs />
      <section className="grow bg-primary-background px-4 py-6 lg:px-14 lg:py-4">
        <TrendingCoins limit={3} />
        <GetStarted />
        {children}
        <YouMayAlsoLike />
      </section>
    </>
  );
}
