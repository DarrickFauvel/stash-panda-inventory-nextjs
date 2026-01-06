import NavLink from "@/components/nav-link";
import Link from "next/link";

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h2 className="text-xl">Categories</h2>
        <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink href="/dashboard/categories">List</NavLink>
            </li>
            <li>
              <NavLink href="/dashboard/categories/new">Add New</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </div>
  );
}
