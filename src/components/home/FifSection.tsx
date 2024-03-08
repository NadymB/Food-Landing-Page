/* eslint-disable @next/next/no-img-element */

import { SERVICE_DATA, getStaticURL } from "@/untils/constants";
import { ServiceCard } from "../ServiceCard";

export const FifSection = () => {
  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `url(/assets/images/sichuan-hotpot.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex px-14 py-20" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
        <div className="flex-1 flex flex-col gap-8">
          {SERVICE_DATA.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.name}
              subTitle={item.content}
              d={item.d}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col justify-center gap-20 pl-20 font-semibold text-base text-white">
            <h2 className="font-notoSerif font-bold text-[40px] text-white mb-0">TẠI SAO KHÁCH HÀNG TIN TƯỞNG BẾP DÌ MAI?</h2>
            <span>Lorem ipsum dolor sit amet consectetur. Magna proin viverra sagittis augue sed. Nisl tortor nullam quis in vel odio turpis duis in. Donec commodo purus diam phasellus. Metus in purus facilisi nulla facilisis urna.</span>
        </div>
      </div>
    </div>
  );
};
