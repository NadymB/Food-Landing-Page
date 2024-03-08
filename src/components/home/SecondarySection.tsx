/* eslint-disable @next/next/no-img-element */

import { CONTACT_DATA, getStaticURL } from "@/untils/constants"
import Icon from "../Icon";
import { ButtonPrimary } from "../ButtonPrimary";

export const SecondarySection = () => {
    const contact = CONTACT_DATA.slice(0,2);
    return (
        <div className="flex">
            <div className="flex-1 flex flex-col gap-[69px] py-20 px-14 bg-secondary">
                <h2 className="font-notoSerif text-[64px] text-white font-bold text-center">THÔNG TIN BẾP</h2>
                <div className="flex flex-col gap-4 pb-2 border-b border-white">
                    {contact.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 text-lg text-white font-bold">
                            <Icon d={item.d} height={24} fill="#fff"/>
                            {item.label}
                        </div>
                    ))}
                </div>
                <img 
                    src={`/assets/images/restaurant.svg`}
                    className="w-full"
                />
            </div>
            <div className="flex-1 flex flex-col gap-[64px] py-20 px-14 bg-primary">
                <h2 className="font-notoSerif text-[64px] text-secondary font-bold text-center">THỰC ĐƠN</h2>
                <div style={{backgroundImage: `url(/assets/images/pancake.svg)`}} className="relative h-full">
                    <ButtonPrimary title="XEM THỰC ĐƠN" containerStyle="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                </div>
            </div>
        </div>
    )
}