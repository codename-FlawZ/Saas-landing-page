import logo from "../assets/logosaas.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
	<footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
    <div className="container">
      <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute">
      <img src={logo} alt="Sass logo" height={20} width={50} className="relative" />
      </div>
      <nav className="flex md:justify-evenly md:items-center max-sm:flex-col max-sm:gap-6 mt-6">
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Customers</a>
        <a href="">Pricing</a>
        <a href="">Help</a>
        <a href="">Carrers</a>
      </nav>
      <div className="flex justify-center gap-6 mt-6">
        <FaSquareXTwitter className="w-8 h-8" />
        <FaSquareInstagram className="w-8 h-8"/>
        <FaLinkedin className="w-8 h-8" />
        <FaPinterestSquare className="w-8 h-8" />
        <FaSquareYoutube className="w-8 h-8 " />
      </div>
      <p className="mt-6">&copy; 2024 Coded by: Pedro H. Alexandre. design by: Frontend Tribe. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer