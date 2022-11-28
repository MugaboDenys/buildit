import Image from "next/image";
import Link from "next/link";
import picture1 from "../../public/picture1.png";
import picture2 from "../../public/picture2.png";

const Hero = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex gap-5">
      <div className="w-1/2 relative">
        <Image className="shadow-2xl shadow-slate-400" src={picture1} alt="" />
        <Image
          className="absolute top-56 left-52 shadow-slate-400"
          src={picture2}
          alt=""
        />
      </div>
      <div className="w-1/2 pt-36 space-y-5">
        <h5 className="text-teal-400 font-semibold">About us</h5>
        <h2 className="text-primaryColor font-bold text-3xl">
          Owner and investor with a reputation
        </h2>
        <p className="text-primaryColor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
          sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
          rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
          ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
          Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
          viverra vel ultrices in, congue sed ex.
        </p>
      </div>
    </div>
  );
};

export default Hero;
