import Link from "next/link";

const Hero = () => {
  return (
    <div className="">
      <div className="w-1/2">
        <h2 className="text-4xl font-bold text-red-300">Development Company</h2>
        <p>
          Forward-thinking real estate developer, owner and investor with a
          reputation
        </p>
        <div>
            <Link href={'/services'} className="py-2 px-3">Services</Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
