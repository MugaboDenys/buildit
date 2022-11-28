import Link from "next/link";
import Image from "next/image";
import buttonIG from "../public/Button2.svg";
import buttonFB from "../public/Button.svg";
const Footer = () => {
  return (
    <footer className="px-32 py-10 bg-footerbg text-slate-100 text-xs">
      <div className="grid grid-cols-4 justify-between">
        <div className=" flex flex-col gap-y-3">
        <h2 className="text-xl font-bold">Buildit</h2>
            <p className="text-xs">Development Company, 2022</p>
        </div>
        <div className="flex flex-col gap-y-3">
          <Link href={"/services"}>Service 1</Link>
          <Link href={"/"}>Service 2</Link>
          <Link href={"/"}>Service 3</Link>
          <Link href={"/"}>Service 4</Link>
        </div>
        <div className="flex flex-col">
          <Link href={"/about"}>About</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div>
          <h2>Get in touch</h2>
          <h2>60 Manor Station St.FairPort,</h2>
          <h2>NY 14450</h2>
        </div>
      </div>
      <div className="grid grid-cols-4 pt-5">
        <h2>
          Site Design <Link href={"/"} className="underline underline-offset-2">Alarm</Link>
        </h2>
        <div className="space-x-2">
          <Link href={"/"} className="inline-block">
            <Image className="hover:opacity-70 duration-200" src={buttonIG} alt="" width={30} />
          </Link>
          <Link href={"/"} className="inline-block">
            <Image className="hover:opacity-70 duration-200" src={buttonFB} alt="" width={30} />
          </Link>
        </div>
        <div className="col-start-4">
            <h2>708-790-0000</h2>
            <h2 className="">sales@buildit.site</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
