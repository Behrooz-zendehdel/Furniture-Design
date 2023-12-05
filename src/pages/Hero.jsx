import NavLink from "../Components/NavLink";
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import carIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";
//react-icons
import { HiMenuAlt3 } from "react-icons/hi"; // debuged code
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import FadeIn from "../Components/FadeIn";

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
            onClick={() => setShowMobileMenu(false)}
            size="25"
            className="absolute top-5 right-5 cursor-pointer"
          />

          {/* navbar to minimized to window responsive */}

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

      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[90px] text-center text-5xl leading-right xs:text-[64px] text-white max-w-[1050px]">
          Bring serenity to Your Pakce With Interior Plants
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
        <h5 className="mt-6 text-center text-sm  xs:text-xl text-white max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          temporibus?
        </h5>
      </FadeIn>
      <FadeIn delay={0.2} direction="up" padding fullWidth>
        <div className="relative w-full sx:w-[460px] mt-11 items-center justify-center flex">
          <input
            type=" text"
            placeholder="search"
            className="rounded-full w-full xs:w-[500px] xl:w-[700px] pl-6 pr-[68px] py-4  border-1 bg-gray-400 outline-none text-white text-base xs:text-lg placeholder-white "
          />
          <img
            src={searchIcon}
            alt=""
            className="absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer"
          />
        </div>
      </FadeIn>
      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#fffff00_0%,_#fff_100%)]"></div>
    </div>
  );
};

export default Hero;
