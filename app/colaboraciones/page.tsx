import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ComingSoon } from "@/components/ComingSoon";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Colaboraciones",
};

export default function ColaboracionesPage() {
  return (
    <>
      <Header />
      <ComingSoon
        icon="headset"
        title="Colaboraciones"
        body="Información para creadores de contenido y colaboradores de Letal Network. Muy pronto por aquí."
      />
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Footer />
      </div>
    </>
  );
}
