import Breadcrumbs from "@/components/ui/Breadcrumbs";

type Props = { children: React.ReactNode };

export default function CryptoDynamicIdLayout({ children }: Props) {
  return (
    <section className="grow bg-primary-background px-14 py-4">
      <Breadcrumbs />
      {children}
    </section>
  );
}
