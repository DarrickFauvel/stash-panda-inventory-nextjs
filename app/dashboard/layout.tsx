import NavLink from "@/components/nav-link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <nav className="flex justify-between">
          <NavLink href="/dashboard">Dashboard Home</NavLink>
          <ul className="flex gap-4">
            <li>
              <NavLink href="/dashboard/items">Items</NavLink>
            </li>
            <li>
              <NavLink href="/dashboard/categories">Categories</NavLink>
            </li>
            <li>
              <NavLink href="/dashboard/locations">Locations</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}
