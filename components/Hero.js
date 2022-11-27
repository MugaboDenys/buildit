import Image from "next/image";
import Link from "next/link";
import rectangle1 from "../public/Rectangle1.png";
import rectangle2 from "../public/Rectangle2.png";
import rectangle3 from "../public/Rectangle3.png";
import rectangle4 from "../public/Rectangle4.png";
import rectangle5 from "../public/Rectangle5.png";
import hero from "../public/hero.svg";

const Hero = () => {
  return (
    <div className="px-32 my-10 flex gap-5">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-6xl font-bold text-footerbg">
          Development Company
        </h2>
        <p className="text-primaryColor text-2xl mt-5">
          Forward-thinking real estate developer, owner and investor with a
          reputation
        </p>
        <div className="mt-10 text-white space-x-5 pt-20">
          <Link
            href={"/services"}
            className="py-2 px-5 font-bold bg-primaryColor shadow-lg shadow-primaryColor hover:bg-footerbg duration-200 rounded-md"
          >
            Services
          </Link>
          <Link
            href={"/services"}
            className=" py-2 px-5 font-bold text-footerbg bg-blue-100  hover:bg-blue-200 duration-200 rounded-md"
          >
            About The Company
          </Link>
        </div>
      </div>
      <div className="relative z-10 w-1/2 space-y-5">
        <div className="flex items-baseline gap-5">
          <Image src={rectangle1} alt="" />
          <Image src={rectangle2} alt="" />
          <Image src={rectangle3} alt="" />
        </div>
        <div className="flex gap-5 items-start">
          <Image className="col-span-2" src={rectangle4} alt="" />
          <Image src={rectangle5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
