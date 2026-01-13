import NavLink from "@/components/nav-link";

export default function PageSubNavComponent({
  endpoint,
}: {
  endpoint: string;
}) {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <NavLink href={`/dashboard/${endpoint}`}>List</NavLink>
        </li>
        <li>
          <NavLink href={`/dashboard/${endpoint}/new`}>Add New</NavLink>
        </li>
      </ul>
    </nav>
  );
}
