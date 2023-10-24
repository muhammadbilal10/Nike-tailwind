import Button from "@/components/Button";
import { arrowRight } from "@/public/assets/icons";
import { statistics } from "@/constants";

const Hero = () => {
  return (
    <section
      className="border-2 border-green-500 w-full p-2 xl:flex-row flex-col
    min-h-screen max-container justify-center"
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
          <span>The new Arrival</span>
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
              <p>{item.value}</p>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
