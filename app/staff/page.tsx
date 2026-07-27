import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { StaffHero } from "@/components/StaffHero";
import { StaffTeam } from "@/components/StaffTeam";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Staff",
};

export default function StaffPage() {
  return (
    <>
      <Header />
      <StaffHero />
      <StaffTeam />
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Footer />
      </div>
    </>
  );
}
