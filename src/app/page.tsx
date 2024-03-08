import { EighthSection } from "@/components/home/EighthSection";
import { FifSection } from "@/components/home/FifSection";
import { FirstSection } from "@/components/home/FirstSection";
import { FourthSection } from "@/components/home/FourthSection";
import { SecondarySection } from "@/components/home/SecondarySection";
import { SeventhSection } from "@/components/home/SeventhSection";
import { SixthSection } from "@/components/home/SixthSection";
import { ThirdSection } from "@/components/home/ThirdSection";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";

export default function Home() {

  return (
    <DefaultLayout>
      <FirstSection />
      <SecondarySection />
      <ThirdSection />
      <FourthSection />
      <FifSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
    </DefaultLayout>
  );
}
