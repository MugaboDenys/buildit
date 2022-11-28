import Image from "next/image";
import logo1 from "../public/Vector.svg";
import logo2 from "../public/Vector2.svg";
import logo3 from "../public/Vector3.svg";
import logo4 from "../public/Vector4.svg";
import logo5 from "../public/Vector5.svg";

const Logo = () => {
  return (
    <div>
      <div className="flex justify-center gap-5 mx-auto  max-w-screen-lg py-10 border-y-2 border-slate-300">
        <Image src={logo1} alt="" />
        <Image src={logo2} alt="" />
        <Image src={logo3} alt="" />
        <Image src={logo4} alt="" />
        <Image src={logo5} alt="" />
      </div>
    </div>
  );
};

export default Logo;
