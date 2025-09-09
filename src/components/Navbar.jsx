export default function Navbar() {
  return (
    <nav className="w-full flex fixed items-center justify-center py-4 px-4 border-b-2">
      <ul className="flex xl:w-[1024px] items-center justify-between">
        <li className="text-4xl font-bold py-1">LOGO</li>
        <li className="min-h-full">
          <ul className="flex items-center xl:gap-8 min-h-full font-medium">
            <li>Work</li>
            <li>Services</li>
            <li>Clients</li>
            <li>About</li>
            <li>Knowledge</li>
            <li className="">
              <a className="text-xl font-bold text-white bg-black px-8 py-3 rounded-sm">
                Contact
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
