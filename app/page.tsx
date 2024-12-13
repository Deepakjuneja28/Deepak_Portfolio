import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
// import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <Portfolio />
      <Services />
      <Contact/>
    </>
  );
}
