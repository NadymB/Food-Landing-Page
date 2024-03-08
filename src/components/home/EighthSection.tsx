"use client"
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { ButtonPrimary } from "../ButtonPrimary";
import { getStaticURL } from "@/untils/constants";
import { useState } from "react";

export const EighthSection = () => {
  const [isHover, setIsHover] = useState<boolean>();

  return (
    <div className="flex gap-6 py-20 px-14 bg-primary">
      <div className="flex-1 flex flex-col gap-10">
        <h2 className="tex-secondary text-[40px] font-notoSerif font-normal">
          Liên hệ đặt món
        </h2>
        <form className="flex flex-col gap-6">
          <span className="text-xl font-normal text-secondary">
            Để lại thông tin liên lạc hoặc liên hệ với chúng tôi qua số điện
            thoại bên dưới để được hỗ trợ sớm nhất
          </span>
          <div className="flex gap-6">
            <input
              placeholder="Họ và Tên"
              className="flex-1 outline-none bg-transparent px-2 py-[13px] border border-[#8F8F8F] text-[#8F8F8F] placeholder:text-[#8F8F8F] text-base font-normal"
            />
            <input
              placeholder="Số điện thoại"
              className="flex-1 outline-none bg-transparent px-2 py-[13px] border border-[#8F8F8F] text-[#8F8F8F] placeholder:text-[#8F8F8F] text-base font-normal"
            />
          </div>
          <input
            placeholder="Email"
            className="outline-none bg-transparent px-2 py-[13px] border border-[#8F8F8F] text-[#8F8F8F] placeholder:text-[#8F8F8F] text-base font-normal"
          />
          <input
            placeholder="Lời nhắn"
            className="outline-none bg-transparent px-2 py-[13px] border border-[#8F8F8F] text-[#8F8F8F] placeholder:text-[#8F8F8F] text-base font-normal"
          />
        </form>
        <ButtonPrimary
          title="GỬI"
          rightIcon={<ArrowRightIcon color={isHover ? "#fff" : "#1C1B1F"} />}
          onMouseMoveIcon={() => setIsHover(true)}
          onMouseLeaveIcon={() => setIsHover(false)}
        />
      </div>
      <div
        className="flex-1"
        style={{
          backgroundImage: `url(/assets/images/chef.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="flex flex-col gap-[180px] h-full pt-6 text-2xl font-normal text-white text-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <h2 className="font-notoSerif text-[40px] text-white font-normal">
            GIỜ MỞ CỬA
          </h2>
          <span>Thứ 2 - Chủ Nhật: 9:00 sáng đến 9:00 tối</span>
        </div>
      </div>
    </div>
  );
};
