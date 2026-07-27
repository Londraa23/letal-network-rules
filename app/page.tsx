import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ModeShowcase } from "@/components/ModeShowcase";
import { WhyLetal } from "@/components/WhyLetal";
import { CommunityCta } from "@/components/CommunityCta";
import { Footer } from "@/components/Footer";
import { getServerStatus } from "@/lib/server-status";

export default async function Home() {
  const status = await getServerStatus();

  return (
    <>
      <Header />
      <Hero status={status} />
      <ModeShowcase />
      <WhyLetal />
      <CommunityCta />

      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Footer />
      </div>
    </>
  );
}
