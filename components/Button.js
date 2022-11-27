import Link from "next/link";

const Button = (content) => {
    return ( 
        <div>
            <div>
            <Link href={'/services'} className="py-2 px-5 font-bold bg-primaryColor shadow-lg shadow-primaryColor hover:bg-footerbg duration-200 rounded-md">{content}</Link>
            </div>
        </div>
     );
}
 
export default Button;