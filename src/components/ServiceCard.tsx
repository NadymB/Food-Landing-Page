import { CarIcon } from "@/assets/icons/CarIcon";
import Icon from "./Icon";

interface IServiceCard {
    d?: string[];
    title: string; 
    subTitle: string;
}

export const ServiceCard = ({d, title, subTitle} : IServiceCard) => {
    return (
        <div className="flex gap-8 px-14 py-6 bg-primary">
            {d ? <Icon d={d} width={56} height={56} fill="#242E52" viewBox="0 0 56 57"/> : <CarIcon/>}
            <div className="flex flex-col gap-[10px] font-notoSerif text-secondary text-xl">
                <span className="text-2xl font-bold">{title}</span>
                <span>{subTitle}</span>
            </div>
        </div>
    )
};
