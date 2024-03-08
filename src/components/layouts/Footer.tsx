/* eslint-disable @next/next/no-img-element */
"use client";

import { CONTACT_DATA, FOOTER_DATA, getStaticURL } from "@/untils/constants";
import Icon from "../Icon";
import Link from "next/link";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";

const Footer = () => {
  return (
    <div className="flex justify-between gap-20 py-[70px] px-[46px] bg-primary border-t border-black">
      <div className="flex flex-col gap-6 max-w-[400px]">
        <div className="flex flex-col gap-2">
          <Link href={"/"}>
            <img
              src={`/assets/images/logo.svg`}
              alt="Logo"
              className="w-14 h-14"
            />
          </Link>
          <div className="text-xl text-black200">
            <strong>Lorem ipsum</strong> dolor sit amet consectetur. Blandit
            vitae justo nunc urna eget fusce.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {CONTACT_DATA.map((item, index) => (
            <div key={index} className="flex gap-[5px]">
              <div className="flex w-6">
                <Icon d={item.d} width={24} color="#242E52" />
              </div>
              <span className="text-xl text-secondary">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold text-secondary text-nowrap">
          Khám phá
        </span>
        <div className="flex flex-col gap-2">
          <Link
            href={"/"}
            className="text-xl font-medium text-secondary text-nowrap hover:text-red200"
          >
            Về chúng tôi
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold text-secondary text-nowrap">
          Mạng xã hội
        </span>
        <div className="flex gap-2">
          <Link href={"/"}>
            <FacebookIcon />
          </Link>
          <Link href={"/"}>
            <InstagramIcon />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-notoSerif text-lg font-light text-secondary max-w-[258px]">
          Đăng ký để nhận thông tin mới sớm nhất từ chúng tôi
        </span>
        <form>
          <div className="flex justify-between border-b border-red300 ">
            <input
              type="email"
              className="p-2 text-red300 text-base font-normal outline-none bg-transparent placeholder:text-red300"
              placeholder="Nhập email ở đây"
            />
            <button type="submit">
              <ArrowRightIcon color="#C2153E" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
