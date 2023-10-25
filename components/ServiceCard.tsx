import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  imgURL: string;
  label: string;
  subtext: string;
}

const ServiceCard = ({ imgURL, label, subtext }: ServiceCardProps) => {
  return (
    <div className="flex flex-col p-10 gap-2 w-[300px] rounded-xl shadow-3xl overflow-hidden">
      <Image
        src={imgURL}
        alt="serviceicon"
        width={40}
        height={40}
        className="bg-coral-red rounded-full p-2"
      />
      <h2 className="font-bold mt-4">{label}</h2>
      <p className="text-slate-gray">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
