
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
