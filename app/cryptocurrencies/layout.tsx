/* eslint-disable @next/next/no-img-element */
import TrendingCoins from "@/components/crypto/TrendingCoins";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

type Props = { children: React.ReactNode };

export default async function CryptoDynamicIdLayout({ children }: Props) {
  return (
    <>
      <Breadcrumbs />
      <section className="grow bg-primary-background px-4 py-6 lg:px-14 lg:py-4">
        <TrendingCoins limit={3} />
        <GetStartedComponent />
        {children}
      </section>
    </>
  );
}

function GetStartedComponent() {
  return (
    <div className="flex h-[515px] w-[436px] items-center justify-center rounded-2xl bg-blue-60 p-10 text-white">
      <div className="flex flex-col items-center justify-items-center gap-5 text-center">
        <h1 className="text-2xl font-bold">Get Started with KoinX for FREE</h1>
        <p className="font-medium">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img
          src="/assets/getstarted_illustration.svg"
          alt="get started illustration"
          height={166}
          width={178}
        />
        <button className="cursor-pointer rounded-lg bg-white px-6 py-4 font-semibold text-black">
          Get Started for FREE {"-->"}
        </button>
      </div>
    </div>
  );
}
