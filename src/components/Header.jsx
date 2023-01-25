import React from "react"

import logo from "../assets/images/Logo.svg"
import BurgerMenu from "./BurgerMenu"

const Header = () => {
const [menuOpen, setMenuOpen] = React.useState(false)


  return (
    <header className=" dark:bg-[burlywood] sticky top-0 bg-slate-300">
      <div className="container py-3 ">
        <nav className="flex justify-between items-center ">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <ul className="flex gap-x-12  md:hidden text-lightBlack dark:text-black">
            <li className="transition duration-300 hover:scale-110">
              <a href="#" className="font-semibold text-xl hover:text-darkRed lg:text-base dark:hover:text-[darkblue]">
                About
              </a>
            </li>
            <li className="transition duration-300 hover:scale-110">
              <a href="#" className="font-semibold text-xl hover:text-darkRed lg:text-base dark:hover:text-[darkblue]">
                Services
              </a>
              </li>
            <li className="transition duration-300 hover:scale-110">
              <a href="#" className="font-semibold text-xl hover:text-darkRed lg:text-base dark:hover:text-[darkblue]">
                Case Studies
              </a>
            </li>
            <li className="transition duration-300 hover:scale-110">
              <a href="#" className="font-semibold text-xl hover:text-darkRed lg:text-base dark:hover:text-[darkblue]">
                Careers
              </a>
              </li>
            <li className="transition duration-300 hover:scale-110">
              <a href="#" className="font-semibold text-xl hover:text-darkRed lg:text-base dark:hover:text-[darkblue]">
                Blog
              </a>
              </li>
          </ul>
          
          {/* menu for mobile */}
          <ul 
            className={`${menuOpen ? "opacity-100 " : "opacity-0 hidden"} absolute top-[59px] left-6 right-6 bg-lightRed flex flex-col gap-4 items-center py-4 dark:bg-[darkslategray] rounded-b-xl transition duration-500 text-xl `}
          >
            <li> <a href="#">About</a> </li>
            <li> <a href="#">Services</a> </li>
            <li> <a href="#">Case Studies</a> </li>
            <li> <a href="#">Careers</a> </li>
            <li> <a href="#">Blog</a> </li>
          </ul>

          {/* burger button */}
          <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </nav>
      </div>
    </header>
  )
}

export default Header