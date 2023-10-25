import Button from "@/components/Button";
import { shoe8 } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex-1 flex flex-col gap-6 lg:max-w-lg">
        <h2 className="text-4xl font-semibold font-palanquin capitalize">
          We provide you
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="text-slate-gray">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to keep you looking and feeling your best. to elevate your
          experience, providing you with unmatched quality innovation and touch
          of elegance.
        </p>
        <p className="text-slate-gray ">
          Our dedication to detail and excellence ensure your statisfaction
        </p>
        <div>
          <Button label="View details" />
        </div>
      </div>
      <div>
        <Image
          src={shoe8}
          alt="quality"
          height={522}
          width={570}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
