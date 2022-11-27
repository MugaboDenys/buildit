import Image from "next/image";
import logo1 from "../public/vector.svg";
import logo2 from "../public/vector2.svg";
import logo3 from "../public/vector3.svg";
import logo4 from "../public/vector4.svg";
import logo5 from "../public/vector5.svg";
import image1 from "../public/Rectangle6.png";
import Link from "next/link";

const Logos = () => {
  return (
    <div className="py-10 bg-bg2 ">
      <div className="flex justify-center gap-5 mx-auto  max-w-screen-lg py-10 border-y-2 border-slate-300">
        <Image src={logo1} alt="" />
        <Image src={logo2} alt="" />
        <Image src={logo3} alt="" />
        <Image src={logo4} alt="" />
        <Image src={logo5} alt="" />
      </div>
      <div className="flex gap-10 max-w-screen-lg mx-auto px-20">
        <div className="w-1/2 pt-44">
          <Image src={image1} alt="" />
        </div>
        <div className="w-1/2 pt-36 space-y-5">
          <h5 className="text-teal-400 font-semibold">About us</h5>
          <h2 className="text-primaryColor font-bold text-3xl">
            Owner and investor with a reputation
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </p>
          <Link
            href={"/"}
            className="relative px-10 py-3 inline-block bg-primaryColor text-white text-xs font-bold rounded-md transform hover:scale-105 duration-200"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logos;
