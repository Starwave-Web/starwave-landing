import Link from "next/link";
import StarwaveLogo from "@/components/icons/starwave-logo";
import { Button } from "@/components/ui/button";
import HamburgerMenu from "../icons/hamburger-menu";

const Navbar = () => {
  return (
    <nav className="min-h-[68px] sticky top-0 py-4 z-[100] bg-white">
      <div className="container flex  items-center h-full mx-auto justify-between px-5">
        <div>
          <StarwaveLogo />
        </div>
        <div>
          <ul className="gap-[40px] items-center hidden lg:flex">
            <li>
              <Link href="/">Szolgáltatások</Link>
            </li>
            <li>
              <Link href="/">Tanulmányok</Link>
            </li>
            <li>
              <Link href="/">Hogyan dolgozunk?</Link>
            </li>
            <li>
              <Link href="/">Árak</Link>
            </li>
            <li>
              <Button className="h-full" variant="outline">Kapcsolatfelvétel</Button>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <HamburgerMenu/>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
