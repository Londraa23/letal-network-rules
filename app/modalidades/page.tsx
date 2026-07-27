import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ComingSoon } from "@/components/ComingSoon";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Modalidades",
};

export default function ModalidadesPage() {
  return (
    <>
      <Header />
      <ComingSoon
        icon="gem"
        title="Modalidades"
        body="Survival Aqua, Gens OP, FullPvP y más. Estamos preparando esta sección con el detalle de cada modo de juego."
      />
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Footer />
      </div>
    </>
  );
}
