import FadeIn from "../Components/FadeIn";
import { services } from "../data";

const Services = () => {
  return (
    <div
      className="mt-[160px] max-w-[1490px] mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:gap-6 xs:justify-between w-full "
      id="services"
    >
      {services.map((service, i) => (
        <FadeIn key={i} delay={0.2} direction="down">
          <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-center">
            <img
              src={service.icon}
              className="max-h-[84px] max-w-[84px]"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1.5  items-center">
            <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium ">
              {service.title}
            </h3>
          </div>
          <div className="flex flex-col gap-1.5 items-center">
            <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontGary font-medium">
              {service.subtitle}
            </h3>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default Services;
