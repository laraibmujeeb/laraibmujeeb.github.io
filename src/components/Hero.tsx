
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-indigo-50 to-white">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Lazalo Mageba
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
        Full-stack Developer
      </h2>
      <div className="flex gap-4 mb-12">
        <Button variant="outline" size="icon" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="mailto:contact@example.com">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
      <Button className="bg-indigo-600 hover:bg-indigo-700">
        <a href="#contact">Get in touch</a>
      </Button>
    </section>
  );
};
