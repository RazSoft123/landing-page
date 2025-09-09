export default function Navbar() {
  return (
    <nav className="w-full flex fixed items-center justify-center py-4 px-4 border-b-2 bg-white z-10">
      <ul className="flex md:w-[752px] lg:w-[1000px] xl:w-[1024px] items-center justify-between">
        <li className="md:text-3xl lg:text-4xl font-bold py-1">LOGO</li>
        <li className="min-h-full">
          <ul className="flex items-center md:gap-3 lg:gap-4 xl:gap-8 min-h-full font-medium">
            <NavbarItem>Work</NavbarItem>
            <NavbarItem>Services</NavbarItem>
            <NavbarItem>Clients</NavbarItem>
            <NavbarItem>About</NavbarItem>
            <NavbarItem>Knowledge</NavbarItem>
            <li className="">
              <a className="md:text-lg lg:text-xl font-bold text-white bg-black md:px-6 md:py-2 lg:px-8 lg:py-3 rounded-sm">
                Contact
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

function NavbarItem({ children }) {
  return <li className="lg:text-lg xl:text-xl">{children}</li>;
}
