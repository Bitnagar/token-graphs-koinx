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
      <section className="main__grid grow bg-primary-background px-3.5 pb-6 pt-4 xl:px-14 xl:py-4">
        <div className="trending__coins w-fit">
          <GetStarted />
          <TrendingCoins limit={3} />
        </div>
        {children}
        <YouMayAlsoLike />
      </section>
    </>
  );
}
