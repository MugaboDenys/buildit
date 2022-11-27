import Image from "next/image";
import image1 from "../public/Card1.png";
import image2 from "../public/Card2.png";
import image3 from "../public/Card3.png";
import image4 from "../public/Card4.png";
import image5 from "../public/Card5.png";
import image6 from "../public/Card6.png";
const Socials = () => {
  return (
    <div className="py-36 bg-bg2 ">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center">
          <h5 className="text-teal-400 font-semibold">Socials</h5>
          <h2 className="text-primaryColor font-bold text-3xl">On Instagram</h2>
        </div>
        <div className="grid grid-cols-3 gap-5 pt-10">
          <Image src={image1} alt="" />
          <Image src={image2} alt="" />
          <Image src={image3} alt="" />
          <Image src={image4} alt="" />
          <Image src={image5} alt="" />
          <Image src={image6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Socials;
