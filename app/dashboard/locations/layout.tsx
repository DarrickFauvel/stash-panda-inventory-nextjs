import PageSubNavComponent from "../components/page-sub-nav";

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h2 className="text-xl">Locations</h2>

        <PageSubNavComponent endpoint="locations" />
      </header>

      {children}
    </div>
  );
}
