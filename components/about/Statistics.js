import Image from "next/image";
import icon1 from "../../public/Icon.png";
import icon2 from "../../public/Icon11.png";
import icon3 from "../../public/Icon12.png";
import Logo from "../../components/Logo"

const Statistics = () => {
  return (
    <div className="bg-bg1 mt-32 py-32">
      <div className="max-w-screen-lg mx-auto">
        <h5 className="text-teal-400 font-semibold text-center">Statistics</h5>
        <h2 className="py-10 text-5xl font-bold text-center text-footerbg">
          Innovative Execution
        </h2>
        <div className="bg-gradient-to-r from-blue-200 to-blue-100 shadow-xl shadow-blue-200 px-20 py-10 mb-16 flex justify-between gap-5">
          <div className="flex gap-10">
            <Image src={icon1} alt="" />
            <div>
              <h2 className="text-3xl text-footerbg font-bold">&gt; 200</h2>
              <h3 className="font-bold text-primaryColor ">Number</h3>
            </div>
          </div>
          <div className="flex gap-10 border-l-2 border-slate-500 px-10">
            <Image src={icon2} alt="" />
            <div>
              <h2 className="text-3xl text-footerbg font-bold">&gt; 70</h2>
              <h3 className="font-bold text-primaryColor ">Number</h3>
            </div>
          </div>
          <div className="flex gap-10 border-l-2 border-slate-500 px-10">
            <Image src={icon3} alt="" />
            <div>
              <h2 className="text-3xl text-footerbg font-bold">&gt; 20</h2>
              <h3 className="font-bold text-primaryColor ">Number</h3>
            </div>
          </div>
        </div>
        <Logo/>
      </div>
    </div>
  );
};

export default Statistics;
