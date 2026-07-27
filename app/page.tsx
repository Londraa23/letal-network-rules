import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { WhyLetal } from "@/components/WhyLetal";
import { AboutSection } from "@/components/AboutSection";
import { ModesRow } from "@/components/ModesRow";
import { Footer } from "@/components/Footer";
import { getServerStatus } from "@/lib/server-status";

export default async function Home() {
  const status = await getServerStatus();

  return (
    <>
      <Header />
      <Hero />
      <StatsBar status={status} />
      <WhyLetal />
      <AboutSection />
      <ModesRow />

      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Footer />
      </div>
    </>
  );
}
