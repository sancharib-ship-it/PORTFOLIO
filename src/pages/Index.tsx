import { useEffect } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Tools } from "@/components/portfolio/Tools";
import { Credentials } from "@/components/portfolio/Credentials";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { SectionTransitions } from "@/components/SectionTransitions";

const Index = () => {
  // On a fresh load with a #hash (e.g. arriving from a deep link or another
  // page), the target section is rendered by React after the browser's initial
  // scroll attempt — so scroll to it once the page has mounted.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace("#", ""));
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SectionTransitions />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Tools />
      <Credentials />
      <Contact />
    </main>
  );
};

export default Index;
