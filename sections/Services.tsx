import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center gap-9 flex-wrap">
      {services.map((service, index) => (
        <div key={index}>
          <ServiceCard {...service} />
        </div>
      ))}
    </section>
  );
};

export default Services;
