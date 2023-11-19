import NavLink from "../Components/NavLink";
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import carIcon from "../assets/cart-icon.svg";
//react-iocons
import { HiMenuAlt3 } from "@heroicons/react/24/solid"; // debuged code

const Hero = () => {
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
        />
      </div>
    </div>
  );
};

export default Hero;
