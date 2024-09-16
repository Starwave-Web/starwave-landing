import Link from "next/link";
import StarwaveLogo from "@/components/icons/starwave-logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="min-h-[68px] sticky top-0 py-4 z-[100] bg-white">
      <div className="container flex gap-[99px] items-center h-full mx-auto justify-between">
        <div>
          <StarwaveLogo />
        </div>
        <div>
          <ul className="flex gap-[40px] items-center">
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
      </div>
    </nav>
  );
};

export default Navbar;
