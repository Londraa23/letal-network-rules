import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { RulesHero } from "@/components/RulesHero";
import { Sidebar } from "@/components/Sidebar";
import { RuleSection } from "@/components/RuleSection";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { rules } from "@/data/rules";

export const metadata: Metadata = {
  title: "Reglas del Servidor",
  description: "Normativa oficial de Letal Network. IP: play.letal.net",
};

export default function ReglasPage() {
  return (
    <>
      <div id="top" />
      <Header />
      <RulesHero />

      <main className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-col gap-10 py-8 md:flex-row md:gap-16 md:py-12">
          <Sidebar />
          <div className="min-w-0 flex-1">
            {rules.map((rule) => (
              <RuleSection key={rule.slug} rule={rule} />
            ))}
          </div>
        </div>
      </main>

      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Footer />
      </div>

      <BackToTop />
    </>
  );
}
