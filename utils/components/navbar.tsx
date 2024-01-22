import LocaleSwitcher from "./locale-switcher";
import { Locale } from "@/i18n.config";
import CustomLink from "./custom-link";

export default function Navbar({ lang }: { lang: Locale }) {
  return (
    <nav className="navbar">
      <ul className="navbar-inner">
        <li>
          <CustomLink href="/" lang={lang}>
            Home
          </CustomLink>
        </li>
        <li>
          <CustomLink href="/about" lang={lang}>
            About
          </CustomLink>
        </li>
      </ul>
      <LocaleSwitcher />
    </nav>
  );
}
