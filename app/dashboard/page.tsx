import NavLink from "@/components/nav-link";

export default function DashboardPage() {
  return (
    <div>
      <header>
        <nav className="flex justify-between">
          <NavLink href="/">Home</NavLink>
          <ul className="flex gap-4">
            <li>
              <NavLink href="/items">Items</NavLink>
            </li>
            <li>
              <NavLink href="/categories">Categories</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
