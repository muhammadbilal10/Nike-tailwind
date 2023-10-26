"use client";
import { footerLinks, socialMedia } from "@/constants";
import { copyrightSign, facebook } from "@/public/assets/icons";
import { footerLogo } from "@/public/assets/images";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex max-lg:flex-col gap-20 justify-between">
        <div className="flex flex-col gap-4">
          <Image src={footerLogo} alt="logo" />
          <p className="text-white max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-4 mt-4">
            {socialMedia.map((link, index) => (
              <div key={index}>
                <Image
                  src={link.src}
                  alt={link.alt}
                  className="bg-white rounded-full p-2 h-10 w-10"
                  onClick={() => window.open(link.link, "_blank")}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-5 flex-wrap">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div>
                <h3 className="text-white font-palanquin font-semibold text-3xl">
                  {link.title}
                </h3>
              </div>
              <div>
                {link.links.map((item, index) => (
                  <div key={index} className="text-slate-gray py-1">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
