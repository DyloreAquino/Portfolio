import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="hover:text-gray-500 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
