import NavLink from "../Components/NavLink";
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import carIcon from "../assets/cart-icon.svg";

//react-icons
import { HiMenuAlt3 } from "react-icons/hi"; // debuged code
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div
      className="h-screen relative flex flex-col items-center "
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="relative w-full max-w-[1490px] flex items-center
     justify-between pt-10 mx-auto px-10"
      >
        <img src={logo} alt="" className="" />
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="services">Services</NavLink>
          <NavLink to="product">Shop</NavLink>
          <NavLink to="refrence">Refrence</NavLink>
          <NavLink to="care">Care</NavLink>
        </ul>
        <img src={carIcon} alt="" className="hidden md:block cursor-pointer" />
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />
        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size="25"
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <NavLink to="services" mobileMenu>
              Services
            </NavLink>
            <NavLink to="product" mobileMenu>
              Shop
            </NavLink>
            <NavLink to="refrence" mobileMenu>
              Refrence
            </NavLink>
            <NavLink to="care" mobileMenu>
              Care
            </NavLink>
          </ul>
          <img src={carIcon} className="mt-8 mx-auto cursor-pointer" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
