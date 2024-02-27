import Link from "next/link";

export default function Page() {
  return (
    <div className="chart__container flex flex-col rounded-lg bg-white p-4">
      <h2 className="mb-3 text-xl font-bold">
        This page was intentionally left as is. It is a part of the scalable
        design of the demo.
      </h2>
      <Link
        className="mt-3 w-fit rounded-lg bg-blue-60 p-4 text-sm font-medium text-white"
        href="/cryptocurrencies/bitcoin"
      >
        Take me to <strong>bitcoin</strong> instead {"-->"}
      </Link>
    </div>
  );
}
