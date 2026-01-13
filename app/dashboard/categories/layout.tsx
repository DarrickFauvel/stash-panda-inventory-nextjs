import NavLink from "@/components/nav-link";
import Link from "next/link";
import PageSubNavComponent from "../components/page-sub-nav";

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h2 className="text-xl">Categories</h2>

        <PageSubNavComponent endpoint="categories" />
      </header>

      {children}
    </div>
  );
}
