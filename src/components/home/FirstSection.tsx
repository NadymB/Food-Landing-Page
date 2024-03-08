/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/untils/constants";
import React from "react";
import { ButtonPrimary } from "../ButtonPrimary";

export const FirstSection = () => {
    return (
        <div 
            style={{
                backgroundImage: `url(/assets/images/meats.svg)`,
            }}
            className="flex flex-col items-center justify-center gap-[52px] h-[722px] pt-[106px]"
        >
            <h2 className="text-center text-[56px] font-bold text-white">
                Bếp Dì Mai <br/>
                Chuyên Các Món Lẩu & Nướng
            </h2>
            <ButtonPrimary 
                title="ĐẶT BÀN"
                containerStyle="bg-transparent text-white border border-white hover:border-none"
            />
        </div>
    )
}