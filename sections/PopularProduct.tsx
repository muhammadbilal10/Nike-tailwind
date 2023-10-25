import PopularProductCard from "@/components/PopularProductCard";
import { products } from "@/constants";

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-5">
        <p className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </p>
        <p className="lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of luxury and comfort with our wide range
          of products.
        </p>

        <div
          className="grid mt-16 lg:grid-cols-4 md:grid-cols-3
       sm:grid-cols-2 grid-cols-1 gap-14"
        >
          {products.map((product, index) => (
            <div key={index}>
              <PopularProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
