import Image from "next/image";
import Link from "next/link";
import image1 from "../public/Photo2.png";
import image2 from "../public/Photo.png";
import image3 from "../public/Photo3.png";
import image4 from "../public/Photo4.png";

const Properties = () => {
  return (
    <div className=" bg-bg1">
      <div className="flex gap-10 max-w-screen-lg mx-auto items-center">
        <div className="w-1/2 pt-36 space-y-5">
          <h5 className="text-teal-400 font-semibold">Available Properties</h5>
          <h2 className="text-primaryColor font-bold text-3xl">
            Featured Listing
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
        <div className="w-1/2 py-44">
          <div className="flex gap-5 items-baseline">
            <Image className="pb-5" src={image1} alt="" />
            <Image src={image2} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Image className="justify-self-end" src={image3} alt="" />
            <Image className="pt-5" src={image4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
