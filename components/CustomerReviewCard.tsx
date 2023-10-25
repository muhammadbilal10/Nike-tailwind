import { star } from "@/public/assets/icons";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface CustomerReviewCardProps {
  imgURL: StaticImageData;
  customerName: string;
  rating: number;
  feedback: string;
}

const CustomerReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: CustomerReviewCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image
        src={imgURL}
        alt={customerName}
        className="rounded-full h-32 w-32 object-cover"
      />
      <p className="text-slate-gray max-w-sm info-text text-center">
        {feedback}
      </p>
      <div>
        <div className="flex items-center justify-center gap-2.5">
          <Image src={star} alt="rating" />
          <span className="text-xl text-slate-gray font-montserrat">
            ({rating})
          </span>
        </div>
        <h3 className="text-3xl font-palanquin mt-1 font-bold">
          {customerName}
        </h3>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
