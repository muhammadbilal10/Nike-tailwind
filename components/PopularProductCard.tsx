import Image from "next/image";
import { star } from "@/public/assets/icons";

interface PopularProductProps {
  product: {
    imgURL: string;
    name: string;
    price: string;
  };
}

const PopularProductCard = ({ product }: PopularProductProps) => {
  return (
    <div className="w-full flex flex-col gap-2.5">
      <Image src={product.imgURL} alt="product" width={282} height={282} />
      <div className="flex gap-2 items-center mt-4">
        <Image src={star} alt="heart" height={18} width={18} />
        <span className="text-slate-gray leading-normal">(4.5)</span>
      </div>
      <h2 className="font-palanquin font-semibold text-2xl">{product?.name}</h2>
      <h2 className="text-coral-red text-xl  font-semibold">
        {product?.price}
      </h2>
    </div>
  );
};

export default PopularProductCard;
