import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Footer } from "@/components/Footer";
import { getServerStatus } from "@/lib/server-status";

export default async function Home() {
  const status = await getServerStatus();

  return (
    <>
      <Header />
      <Hero />
      <BentoGrid status={status} />

      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Footer />
      </div>
    </>
  );
}
