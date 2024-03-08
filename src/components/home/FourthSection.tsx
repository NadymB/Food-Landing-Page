"use client";

import { COMBO_MENU, getStaticURL } from "@/untils/constants";
import { ButtonPrimary } from "../ButtonPrimary";
import { PanIcon } from "@/assets/icons/PanIcon";
import { useState } from "react";
import { StoveIcon } from "@/assets/icons/StoveIcon";

export const FourthSection = () => {
  const [isChooseDish, setIsChooseDish] = useState(0);
  return (
    <div
      className="flex flex-col gap-16 justify-between py-10 px-14 bg-primary"
      style={{
        backgroundColor: `url(/assets/images/hotpot.svg)`,
      }}
    >
      <h2 className="font-notoSerif text-[40px] font-bold text-red100 text-center">
        COMBO<span className="text-secondary"> CHỈ CÓ TẠI </span>BẾP DÌ MAI
      </h2>
      <div className="flex">
        <div className="flex flex-col justify-between pr-14">
          {COMBO_MENU.map((item, index) => (
            <button
              key={index}
              className={`flex gap-2 items-center pb-1 text-2xl font-bold text-nowrap ${
                isChooseDish === index ? "text-red100" : "text-secondary"
              }`}
              onClick={() => setIsChooseDish(index)}
            >
              <PanIcon color={isChooseDish === index ? "#DF1B1B" : "#242E52"} />
              {item.name}
            </button>
          ))}
        </div>
        {COMBO_MENU.map(
          (item, index) =>
            isChooseDish === index && (
              <div key={index} className="flex gap-6">
                <div className="flex-1 relative">
                  <div
                    style={{
                      backgroundImage: `url(/assets/images/${
                        item.banner
                      })`,
                    }}
                    className="w-[541px] h-full"
                  />
                  <ButtonPrimary
                    title="ĐẶT MÓN NGAY"
                    containerStyle="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <div className="flex flex-col gap-8 px-4 py-6">
                  <div className="flex flex-col gap-4">
                    <span className="font-notoSerif text-secondary text-sm font-normal">Mô tả</span>
                    <span className="text-base font-semibold text-secondary">{item.desc}</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="font-notoSerif text-secondary text-sm font-normal">Combo sẽ bao gồm:</span>
                    <div className="flex flex-col gap-2">
                      {item.collect.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-base font-semibold text-secondary">
                          <StoveIcon />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="font-notoSerif text-secondary text-sm font-normal">
                    Chỉ với giá:
                    <span className="font-quicksand font-bold text-red200 text-2xl"> {item.price}</span>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
