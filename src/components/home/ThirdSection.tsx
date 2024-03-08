import { getStaticURL } from "@/untils/constants";
import { ButtonPrimary } from "../ButtonPrimary";

export const ThirdSection = () => {
  return (
    <div
      className="h-[428px]"
      //   style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}}
      style={{
        backgroundImage: `url(/assets/images/hotpot.svg)`,
      }}
    >
      <div
        className="flex flex-col justify-between py-10 px-14 h-full"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      >
        <div className="flex flex-col gap-8 max-w-[50%]">
          <h2 className="font-notoSerif text-[40px] text-white font-bold">
            VỀ BẾP DÌ MAI
          </h2>
          <span className="text-xl text-white font-semibold">
            Lorem ipsum dolor sit amet consectetur. Arcu fringilla velit
            elementum tellus non ullamcorper tortor. Hac eu congue parturient
            imperdiet laoreet tincidunt tellus et. Cursus ut proin dolor dui.
            Quis turpis blandit egestas sagittis porttitor consequat.
          </span>
        </div>
        <ButtonPrimary
          title="ĐỌC THÊM"
          containerStyle="font-notoSerif text-base font-bold text-white bg-transparent border-b-2 border-white"
          prioritizeContainerStyle={{padding: "4px 0"}}
        />
      </div>
    </div>
  );
};
