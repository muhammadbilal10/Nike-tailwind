import Button from "@/components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex max-lg:flex-col items-center justify-between gap-10"
    >
      <h2 className="text-4xl font-bold text-center">
        Signup for <span className="text-coral-red">Updates</span> & Newsletter
      </h2>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="SignUp" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
