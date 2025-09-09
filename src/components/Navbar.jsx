import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex fixed items-center justify-center py-4 px-4 border-b-2 bg-white z-10">
      <ul className="flex md:w-[752px] lg:w-[1000px] xl:w-[1024px] items-center justify-between w-full">
        <li className="md:text-3xl lg:text-4xl font-bold py-1">LOGO</li>
        <li className="hidden md:flex min-h-full">
          <ul className="flex items-center md:gap-3 lg:gap-4 xl:gap-8 min-h-full font-medium">
            <NavbarItem>Work</NavbarItem>
            <NavbarItem>Services</NavbarItem>
            <NavbarItem>Clients</NavbarItem>
            <NavbarItem>About</NavbarItem>
            <NavbarItem>Knowledge</NavbarItem>
            <li>
              <a className="md:text-lg lg:text-xl font-bold text-white bg-black md:px-6 md:py-2 lg:px-8 lg:py-3 rounded-sm">
                Contact
              </a>
            </li>
          </ul>
        </li>

        <li className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </li>
      </ul>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b-2 shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 font-medium">
            <NavbarItem>Work</NavbarItem>
            <NavbarItem>Services</NavbarItem>
            <NavbarItem>Clients</NavbarItem>
            <NavbarItem>About</NavbarItem>
            <NavbarItem>Knowledge</NavbarItem>
            <li>
              <a className="text-lg font-bold text-white bg-black px-6 py-2 rounded-sm">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function NavbarItem({ children }) {
  return <li className="lg:text-lg xl:text-xl">{children}</li>;
}
