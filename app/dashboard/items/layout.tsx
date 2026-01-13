import PageSubNavComponent from "../components/page-sub-nav";

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h2 className="text-xl">Items</h2>

        <PageSubNavComponent endpoint="items" />
      </header>

      {children}
    </div>
  );
}
