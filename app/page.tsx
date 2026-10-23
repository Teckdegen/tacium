import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Bento from "@/components/Bento";
import Stats from "@/components/Stats";
import UseCases from "@/components/UseCases";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Safety from "@/components/Safety";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Bento />
        <Stats />
        <UseCases />
        <Problem />
        <HowItWorks />
        <Safety />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
