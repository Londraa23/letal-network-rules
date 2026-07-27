import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ComingSoon } from "@/components/ComingSoon";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Staff",
};

export default function StaffPage() {
  return (
    <>
      <Header />
      <ComingSoon
        icon="gavel"
        title="Staff"
        body="Conoce al equipo que mantiene Letal Network en marcha. Esta sección está en construcción."
      />
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Footer />
      </div>
    </>
  );
}
