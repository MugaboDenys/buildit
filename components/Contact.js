import Image from "next/image";
import Link from "next/link";
import icon1 from "../public/Icon1.png";
import icon2 from "../public/Icon2.png";

const Contact = () => {
  return (
    <div className="bg-bg1 px-32 py-32 flex justify-between">
      <div>
        <h5 className="text-teal-400 font-semibold">Contact</h5>
        <h2 className="text-footerbg font-bold text-3xl">Get In Touch</h2>
        <div className="space-y-5 pt-20">
          <div className="flex gap-x-3 items-center">
            <Image src={icon1} alt="" width={50} />
            <div>
              <h6 className="text-footerbg text-xs">Tel</h6>
              <h4 className="font-bold text-footerbg text-sm">708-790-0000</h4>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <Image src={icon2} alt="" width={50} />
            <div>
              <h6 className="text-footerbg text-xs">Email</h6>
              <h4 className="font-bold text-footerbg text-sm">
                sales@buildit.site
              </h4>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <Image src={icon2} alt="" width={50} />
            <div>
              <h6 className="text-footerbg text-xs">Office</h6>
              <h4 className="font-bold text-footerbg text-sm">
                60 Manor Station St. Fairport, NY 14450
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg2 p-10 text-xs text-footerbg rounded-sm shadow-shadow1">
        <div className="grid grid-cols-2 gap-3 spacey-3">
          <div className="space-y-2">
            <h6>Name</h6>
            <input
              className="p-2 border-2 border-footerbg rounded-sm bg-bg2 outline-none"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="space-y-2">
            <h6>Email</h6>
            <input
              className="p-2 border-2 border-footerbg rounded-sm bg-bg2 outline-none"
              type="text"
            />
          </div>
          <div className="space-y-2 col-span-2">
            <h6>Subject</h6>
            <input
              className="p-2 w-80 border-2 border-footerbg rounded-sm bg-bg2 outline-none"
              type="text"
            />
          </div>
          <div className="space-y-2 col-span-2">
            <h6>Subject</h6>
            <textarea className="p-2 w-80 border-2 border-footerbg rounded-sm bg-bg2 outline-none" name="" id="" cols="30" rows="6"></textarea>
          </div>
          <Link href={'/'} className="col-span-2 text-center px-10 py-3 bg-primaryColor text-white text-xs font-bold rounded-md transform hover:scale-105 duration-200">Send Message</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
