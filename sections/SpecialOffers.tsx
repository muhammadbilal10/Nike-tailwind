import Button from "@/components/Button";
import { arrowRight } from "@/public/assets/icons";
import { offer } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

const SpecialOffers = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container  ">
      <div>
        <Image src={offer} alt="offer" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">
          <span className="text-coral-red">Special</span> Offers
        </h1>
        <p className="text-slate-gray info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-slate-gray info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button label="Learn More" variant="outlined" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
