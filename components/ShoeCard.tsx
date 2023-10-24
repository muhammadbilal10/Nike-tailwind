import Image, { StaticImageData } from "next/image";
import React from "react";

interface ShoeCardProps {
  ImgUrl: {
    bigShoe: StaticImageData;
    thumbnail: string;
  };
  changeBigShoeImage: (shoe: string) => void;
  bigshoeImage: string;
}
const ShoeCard: React.FC<ShoeCardProps> = ({
  ImgUrl,
  changeBigShoeImage,
  bigshoeImage,
}) => {
  return (
    <div
      className={`flex justify-center items-center bg-center
     bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ${
       bigshoeImage === ImgUrl?.bigShoe.src ? "border-2 border-coral-red" : ""
     }`}
      style={{
        backgroundImage: 'url("/assets/images/thumbnail-background.svg")',
      }}
      onClick={() => changeBigShoeImage(ImgUrl?.bigShoe.src)}
    >
      <Image
        src={ImgUrl?.thumbnail}
        alt="shoe colletion"
        width={127}
        height={103.34}
        className="object-contain"
      />
    </div>
  );
};

export default ShoeCard;
