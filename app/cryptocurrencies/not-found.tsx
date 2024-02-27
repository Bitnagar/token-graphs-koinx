import Link from "next/link";

export default function NotFound() {
  return (
    <div className="chart__container flex flex-col rounded-lg bg-white p-4">
      <h2 className="mb-3 text-3xl font-bold">Not Found</h2>
      <p className="text-lg font-medium">
        Oops! Could not find requested coin?! You might want to check if there
        was a spelling mistake otherwise its on us!
      </p>
      <Link
        className="mt-3 w-fit rounded-lg bg-blue-60 p-4 text-sm font-medium text-white"
        href="/cryptocurrencies/bitcoin"
      >
        Check <strong>bitcoin</strong> instead?
      </Link>
    </div>
  );
}
