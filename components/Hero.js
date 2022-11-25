import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-20">
      <div className="w-1/2">
        <h2 className="text-5xl font-bold text-footerbg">Development Company</h2>
        <p className="text-primaryColor text-2xl">
          Forward-thinking real estate developer, owner and investor with a
          reputation
        </p>
        <div className="mt-10 text-white" >
            <Link href={'/services'} className="py-2 px-5 font-bold bg-primaryColor shadow-lg shadow-primaryColor hover:bg-footerbg duration-200 rounded-md">Services</Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
