import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "@/public/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Logo"
            width={30}
            height={30}
            className="w-auto h-auto"
          />
          <span className="font-semibold text-xl hidden sm:inline-block">
            Learn Next.js
          </span>
        </Link>

        {/* Login and Register buttons on the right */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Register</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
