import Link from "next/link";

const links = [
  { href: "/chat", label: "Chat" },
  { href: "/tours", label: "Tours" },
  { href: "/tours/new-tour", label: "New Tour" },
  { href: "/profile", label: "Profile" },
];

const NavLinks = () => {
  return (
    <ul className="menu">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="capitalize">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
