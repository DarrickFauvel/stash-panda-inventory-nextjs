"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname === href) {
    return (
      <Link className="font-bold underline" href={href}>
        {children}
      </Link>
    );
  }
  return (
    <Link className="hover:underline" href={href}>
      {children}
    </Link>
  );
}
