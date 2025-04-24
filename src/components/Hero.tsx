
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
          Lazalo Mageba
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Senior Full-stack Developer crafting scalable web solutions with AWS & PHP
        </h2>
        <div className="flex gap-4 justify-center my-8">
          <Button variant="outline" size="icon" className="hover:scale-105 transition-transform" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="hover:scale-105 transition-transform" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="hover:scale-105 transition-transform" asChild>
            <a href="mailto:contact@example.com" aria-label="Email Contact">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
    </section>
  );
};
