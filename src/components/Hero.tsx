
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="relative mx-auto w-48 h-48 mb-8">
          <Avatar className="w-48 h-48 border-4 border-white shadow-xl">
            <AvatarImage
              src="/lovable-uploads/732e1b5f-39f1-4b34-8a84-ac68c1240891.png"
              alt="Laraib Mujeeb"
              className="object-cover"
            />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
          Laraib Mujeeb
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer crafting scalable web solutions with Laravel & React
        </h2>
        <div className="flex gap-4 justify-center my-8">
          <Button variant="outline" size="icon" className="hover:scale-105 transition-transform hover:bg-indigo-50" asChild>
            <a href="https://github.com/laraibmujeeb" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-5 w-5 text-indigo-600" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="hover:scale-105 transition-transform hover:bg-purple-50" asChild>
            <a href="https://www.linkedin.com/in/laraib-mujeeb-6b977b1b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5 text-purple-600" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="hover:scale-105 transition-transform hover:bg-pink-50" asChild>
            <a href="mailto:mujeeblaraib@gmail.com" aria-label="Email Contact">
              <Mail className="h-5 w-5 text-pink-600" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="hover:scale-105 transition-transform hover:bg-emerald-50" asChild>
            <a href="tel:+918299371557" aria-label="Phone Contact">
              <Phone className="h-5 w-5 text-emerald-600" />
            </a>
          </Button>
        </div>
        <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
    </section>
  );
};
