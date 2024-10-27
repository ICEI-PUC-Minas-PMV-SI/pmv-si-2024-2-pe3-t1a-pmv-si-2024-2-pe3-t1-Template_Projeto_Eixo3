import Link from "next/link";
import { Heading } from "@chakra-ui/react";

const Navbar = () => {

  return (
    <nav className="bg-gray-200 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Heading as="h3" size="lg">
              <Link href="/" className="text-xl font-bold text-amber-900">
                Baobá
              </Link>
            </Heading>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#home" className="text-amber-900 hover:text-gray-300">
              Início
            </Link>
            <Link href="#about" className="text-amber-900 hover:text-gray-300">
              Sobre
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
