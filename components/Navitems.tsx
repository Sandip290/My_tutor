'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navItems = [
    { label: "Home", href: "/" },
    { label: "Companions", href: "/Companinons" },
    { label: "My Journey", href: "/my-journey" },
  ];
const Navitems = () => {
    const pathname = usePathname();

    return (
    <nav className="flex items-center gap-4">
        {navItems.map(({ label, href}) => (
            <Link href={href} key={label}
            className={cn(pathname === href ? "text-blue-500 font-semibold" : "text-gray-700 ")}>
               {label}            
            </Link>
        ))}
    </nav>
  )
}

export default Navitems