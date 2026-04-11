import PresentationDeck from "@/components/PresentationDeck";
import Slide1Cover from "@/components/slides/Slide1Cover";
import Slide2Agenda from "@/components/slides/Slide2Agenda";
import Slide_Chapter1 from "@/components/slides/Slide_Chapter1";
import Slide_1_1_IndustryStatus from "@/components/slides/Slide_1_1_IndustryStatus";
import Slide_1_2_Research from "@/components/slides/Slide_1_2_Research";
import Slide_2_Cover from "@/components/slides/Slide_2_Cover";
import Slide_2_1_Definition from "@/components/slides/Slide_2_1_Definition";
import Slide_2_2_Saola from "@/components/slides/Slide_2_2_Saola";
import Slide_2_3_Rainstorm from "@/components/slides/Slide_2_3_Rainstorm";
import Slide_2_4_RiskImpact from "@/components/slides/Slide_2_4_RiskImpact";
import Slide_2_5_PostCompletion from "@/components/slides/Slide_2_5_PostCompletion";
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
import Slide_5_Cover from "@/components/slides/Slide_5_Cover";
import Slide_5_1_MarketShifts from "@/components/slides/Slide_5_1_MarketShifts";
import Slide_5_2_TechnologyTransition from "@/components/slides/Slide_5_2_TechnologyTransition";
import Slide_5_3_ReputationalRisk from "@/components/slides/Slide_5_3_ReputationalRisk";
import Slide_6_Cover from "@/components/slides/Slide_6_Cover";
import Slide_6_1_FinancialImpacts from "@/components/slides/Slide_6_1_FinancialImpacts";
import Slide_6_2_FinancialMatrix from "@/components/slides/Slide_6_2_FinancialMatrix";
import Slide_6_3_ResponseMeasures from "@/components/slides/Slide_6_3_ResponseMeasures";
import Slide_6_4_Appendix from "@/components/slides/Slide_6_4_Appendix";
import Slide3Closing from "@/components/slides/Slide3Closing";

export default function Home() {
  const slides = [
    <Slide1Cover key="slide-cover" />,
    <Slide2Agenda key="slide-agenda" />,
    <Slide_Chapter1 key="chap1" />,
    <Slide_1_1_IndustryStatus key="chap1-1-status" />,
    <Slide_1_2_Research key="chap1-2" />,
    <Slide_2_Cover key="chap2-cover" />,
    <Slide_2_1_Definition key="chap2-1" />,
    <Slide_2_2_Saola key="chap2-2" />,
    <Slide_2_3_Rainstorm key="chap2-3" />,
    <Slide_2_4_RiskImpact key="chap2-4" />,
    <Slide_2_5_PostCompletion key="chap2-5" />,
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
    <Slide_5_Cover key="chap5-cover" />,
    <Slide_5_1_MarketShifts key="chap5-1" />,
    <Slide_5_2_TechnologyTransition key="chap5-2" />,
    <Slide_5_3_ReputationalRisk key="chap5-3" />,
    <Slide_6_Cover key="chap6-cover" />,
    <Slide_6_1_FinancialImpacts key="chap6-1" />,
    <Slide_6_2_FinancialMatrix key="chap6-2" />,
    <Slide_6_3_ResponseMeasures key="chap6-3" />,
    <Slide_6_4_Appendix key="chap6-4" />,
    <Slide3Closing key="slide-closing" />
  ];

  return (
    <main>
      <PresentationDeck slides={slides} />
    </main>
  );
}
