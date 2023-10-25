"use client";
import Button from "@/components/Button";
import { arrowRight } from "@/public/assets/icons";
import { shoes, statistics } from "@/constants";
import Image from "next/image";
import { bigShoe1 } from "@/public/assets/images";
import ShoeCard from "@/components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShowImg, setBigShowImg] = useState("");
  return (
    <section
      id="home"
      className="w-full p-2 flex xl:flex-row flex-col
    min-h-screen max-container justify-center gap-10"
    >
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start
      max-xl:padding-x pt-28 w-full"
      >
        <p className="text-lg text-coral-red font-montserrat">
          our summer collections
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl
         max-sm:text-[72px] max-sm:leading-[82px] font-bold"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The new Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p
          className="font-montserrat text-lg mt-6
         mb-14 text-slate-gray leading-8 sm:max-w-sm"
        >
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className="text-4xl font-montserrat font-bold">{item.value}</p>
              <p className="leading-7 text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1  flex justify-center items-center bg-primary bg-cover bg-center xl:min-h-screen max-xl:py-40">
        <Image
          src={bigShowImg || bigShoe1}
          alt=""
          height={500}
          width={610}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                ImgUrl={shoe}
                changeBigShoeImage={(shoe: string) => {
                  setBigShowImg(shoe);
                }}
                bigshoeImage={bigShowImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
