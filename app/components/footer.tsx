import NavLink from "@/components/nav-link";

export default function FooterComponent() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content rounded">
      <div className="@container w-full">
        <nav>
          <ul className="flex flex-col @md:flex-row gap-4">
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink href="/privacy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink href="/terms">Terms of Service</NavLink>
            </li>
            <li>Social links</li>
          </ul>
        </nav>
        <p className="@container w-full"><span className="hidden @md:inline">Copyright</span> © {new Date().getFullYear()} - All right reserved by Stash Panda</p>
      </div>
    </footer>
  );
}
