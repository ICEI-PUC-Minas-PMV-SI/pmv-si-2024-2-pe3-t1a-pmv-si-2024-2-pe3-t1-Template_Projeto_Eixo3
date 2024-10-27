import Image from "next/image";

const CustomCard = ({ src, alt, width, height, title, description }) => {
  console.log(src);
  return (
   <div >
      <div className="bg-gray-200 flex flex-col justify-center shadow-md rounded-lg overflow-hidden">
        <div className="flex p-3 justify-center" >
        <Image src={src} alt={alt} width={width} height={height} ></Image>
        </div>
        <div className="flex justify-center p-4">
          <span className="font-semibold text-lg">{title}</span>
          <p className="text-gray-500 text-sm mt-2">{description}</p>
        </div>
      </div>
   </div>
  );
};

export default CustomCard;
