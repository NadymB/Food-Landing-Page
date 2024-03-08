/* eslint-disable @next/next/no-img-element */

import { getStaticURL } from "@/untils/constants";

export const SeventhSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/images/grilled-meatballs.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "-200px",
      }}
    >
      <div className="flex flex-col items-center gap-8 w-full py-20 text-xl text-white text-center" style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
        <h2 className="mb-0 font-notoSerif text-[40px] font-bold text-white">
          LẨU & NƯỚNG NGON NHẤT SÀI GÒN
        </h2>
        <span className="max-w-[83.47%]">
          Lorem ipsum dolor sit amet consectetur. Neque purus aliquam mi
          molestie odio malesuada eu. Volutpat sed amet non sem aliquam.
          Fermentum iaculis faucibus nunc id dis venenatis risus.
        </span>
      </div>
    </div>
  );
};
