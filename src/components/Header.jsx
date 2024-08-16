import Logo from "../assets/logosaas.png";
import { Bars3Icon } from "@heroicons/react/16/solid";

const Header = () => {
  return (
	<header className="sticky top-0 backdrop-blur-sm z-20">
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="Saas Logo" width={40} height={40} />
          <Bars3Icon className="h-5 w-5 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#About" className="hover:text-black transition-all duration-200" >About</a>
            <a href="#Features" className="hover:text-black transition-all duration-200" >Features</a>
            <a href="#Customers" className="hover:text-black transition-all duration-200" >Customers</a>
            <a href="#Updates" className="hover:text-black transition-all duration-200" >Updates</a>
            <a href="#Help" className="hover:text-black transition-all duration-200" >Help</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight hover:bg-transparent hover:text-black transition-all duration-150" >Get for Free</button>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header