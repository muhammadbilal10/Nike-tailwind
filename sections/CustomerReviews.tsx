import CustomerReviewCard from "@/components/CustomerReviewCard";
import { reviews } from "@/constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div>
        <h2 className="text-4xl font-semibold text-center capitalize">
          What our
          <span className="text-coral-red"> Customer</span> Says?
        </h2>
        <p className="info-text mt-4 max-w-lg text-center m-auto">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <CustomerReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
