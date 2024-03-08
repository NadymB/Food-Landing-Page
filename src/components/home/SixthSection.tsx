/* eslint-disable @next/next/no-img-element */

import { ArrowOutwardIcon } from "@/assets/icons/ArrowOutwardIcon";
import { OUTSTANDING_IMAGE, getStaticURL } from "@/untils/constants";
import Link from "next/link";

export const SixthSection = () => {
    return (
        <div className="flex flex-col gap-8 py-20 px-14 bg-primary">
            <Link href="/" className="flex items-center gap-2">
                <div className="font-notoSerif text-secondary text-4xl">
                    Theo dõi
                    <span className="font-quicksand font-bold"> Facebook</span>
                </div>
                <ArrowOutwardIcon />
            </Link>
            <div className="flex gap-6">
                {OUTSTANDING_IMAGE.map((item,index) => (
                    <img 
                        src={`/assets/images/${item}`}
                        className="flex-1 h-full"
                    />
                ))}
            </div>
        </div>
    )
}