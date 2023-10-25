import Image from "next/image";
import React from "react";

interface ButtonProps {
  label: string;
  iconUrl?: string;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({ label, iconUrl, variant }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 border-2 px-7
     py-4 text-lg leading-none rounded-full ${
       variant ? "text-slate-gray bg-white" : "bg-coral-red text-white"
     }`}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="arrow right Icon"
          className="h-5 w-5 rounded-full ml-2"
        />
      )}
    </button>
  );
};

export default Button;
