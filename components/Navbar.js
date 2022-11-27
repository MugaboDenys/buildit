import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="flex justify-between mb-10 px-32 py-10">
           <Link href={'/'}>
           <div className="flex items-center gap-x-3 transform hover:scale-105 duration-200">
                <div className="w-12 h-12 rounded-full bg-primaryColor shadow-primaryColor shadow-xl "></div>
                <h2 className="font-bold text-2xl text-teal-800 transform hover:scale-105 duration-200">Buildit</h2>
            </div>
           </Link>
            <div className="flex gap-x-10 text-teal-700">
                <Link href={'/about'} className="hover:text-teal-900">About</Link>
                <Link href={'/services'} className="hover:text-teal-900">Services</Link>
                <Link href={'/projects'} className="hover:text-teal-900">Projects</Link>
                <Link href={'/contact'} className="hover:text-teal-900">Contact</Link>
            </div>
            <div>
                <Link href={'/'} className="px-6 py-2 bg-primaryColor text-white text-xs font-bold rounded-md transform hover:scale-105">Need a project?</Link>
            </div>
        </div>
     );
}
 
export default Navbar;