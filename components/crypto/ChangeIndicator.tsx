import { cn } from "@/utils/crypto/utils";

export function ChangeIndicator({
  priceChange,
  className,
}: {
  priceChange: number;
  className?: string;
}) {
  const profit = priceChange > 0 ? true : false;
  return (
    <span
      className={cn(
        "min-w-max rounded-[4px] px-2 py-1 ",
        profit
          ? "bg-profit-background text-profit-foreground"
          : "bg-loss-background text-loss-foreground",
        className,
      )}
    >
      {profit ? "▲" : "▼"} {priceChange.toFixed(2)}%
    </span>
  );
}
