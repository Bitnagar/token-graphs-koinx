import { cn } from "@/utils/crypto/utils";

export function ChangeIndicator({
  change,
  className,
}: {
  change: number;
  className: string;
}) {
  const profit = change > 0 ? true : false;
  return (
    <span
      className={cn(
        "rounded-[4px] px-2 py-1",
        profit
          ? "bg-profit-background text-profit-foreground"
          : "bg-loss-background text-loss-foreground",
        className,
      )}
    >
      {profit ? "▲" : "▼"} {change.toFixed(2)}%
    </span>
  );
}
