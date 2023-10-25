import Image from "next/image";
import React from "react";

interface ButtonProps {
  label: string;
  iconUrl?: string;
}

const Button: React.FC<ButtonProps> = ({ label, iconUrl }) => {
  return (
    <button
      className="flex justify-center items-center gap-2 border px-7
     py-4 text-lg leading-none rounded-full
      border-coral-red text-white bg-coral-red"
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
