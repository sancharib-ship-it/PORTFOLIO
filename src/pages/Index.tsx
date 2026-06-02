import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Tools } from "@/components/portfolio/Tools";
import { Credentials } from "@/components/portfolio/Credentials";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { SectionTransitions } from "@/components/SectionTransitions";

const Index = () => {
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
