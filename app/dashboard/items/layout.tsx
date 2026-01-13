import NavLink from "@/components/nav-link";

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h2 className="text-xl">Items</h2>
        <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink href="/dashboard/items">List</NavLink>
            </li>
            <li>
              <NavLink href="/dashboard/items/new">Add New</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </div>
  );
}
