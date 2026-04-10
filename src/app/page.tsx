import PresentationDeck from "@/components/PresentationDeck";
import Slide1Cover from "@/components/slides/Slide1Cover";
import Slide2Agenda from "@/components/slides/Slide2Agenda";
import Slide_Chapter1 from "@/components/slides/Slide_Chapter1";
import Slide_1_Body from "@/components/slides/Slide_1_Body";
import Slide_3_Cover from "@/components/slides/Slide_3_Cover";
import Slide_3_1_SeaLevel from "@/components/slides/Slide_3_1_SeaLevel";
import Slide_3_2_Structural from "@/components/slides/Slide_3_2_Structural";
import Slide_3_3_Temperature from "@/components/slides/Slide_3_3_Temperature";
import Slide_3_4_Productivity from "@/components/slides/Slide_3_4_Productivity";
import Slide_4_Cover from "@/components/slides/Slide_4_Cover";
import Slide_4_1_PolicyRisk from "@/components/slides/Slide_4_1_PolicyRisk";    
import Slide_4_1_PolicyRisk_2 from "@/components/slides/Slide_4_1_PolicyRisk_2";
import Slide_4_2_SRV from "@/components/slides/Slide_4_2_SRV";
import Slide_4_3_Cover from "@/components/slides/Slide_4_3_Cover";
import Slide_4_3_Detail from "@/components/slides/Slide_4_3_Detail";
import Slide_4_4_Cover from "@/components/slides/Slide_4_4_Cover";
import Slide_4_4_Detail from "@/components/slides/Slide_4_4_Detail";
import Slide_4_5_Cover from "@/components/slides/Slide_4_5_Cover";
import Slide_4_5_Detail from "@/components/slides/Slide_4_5_Detail";
import Slide3Closing from "@/components/slides/Slide3Closing";

export default function Home() {
  const slides = [
    <Slide1Cover key="slide-cover" />,
    <Slide2Agenda key="slide-agenda" />,
    <Slide_Chapter1 key="chap1" />,
    <Slide_1_Body key="chap1-1" />,
    <Slide_3_Cover key="chap3-cover" />,
    <Slide_3_1_SeaLevel key="chap3-1" />,
    <Slide_3_2_Structural key="chap3-2" />,
    <Slide_3_3_Temperature key="chap3-3" />,
    <Slide_3_4_Productivity key="chap3-4" />,
    <Slide_4_Cover key="chap4-cover" />,
    <Slide_4_1_PolicyRisk key="chap4-1" />,
    <Slide_4_1_PolicyRisk_2 key="chap4-1-2" />,
    <Slide_4_2_SRV key="chap4-2" />,
    <Slide_4_3_Cover key="chap4-3-cover" />,
    <Slide_4_3_Detail key="chap4-3-detail" />,
    <Slide_4_4_Cover key="chap4-4-cover" />,
    <Slide_4_4_Detail key="chap4-4-detail" />,
    <Slide_4_5_Cover key="chap4-5-cover" />,
    <Slide_4_5_Detail key="chap4-5-detail" />,
    <Slide3Closing key="slide-closing" />
  ];

  return (
    <main>
      <PresentationDeck slides={slides} />
    </main>
  );
}
