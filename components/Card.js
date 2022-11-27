import Image from "next/image";

const Card = ({link, title, paragraph}) => {
  return (
    <div className="px-10 w-1/3">
      <Image src={link} width={50} height={50} alt="" />
      <h3 className="text-footerbg font-bold text-xl">{title}</h3>
      <p className="text-primaryColor">{paragraph}</p>
    </div>
  );
};

export default Card;
