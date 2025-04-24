
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center">
          Get in Touch
        </h2>
        <Card className="backdrop-blur-sm bg-white/50 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Let's connect!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-105 transition-transform hover:bg-indigo-50" 
                asChild
              >
                <a href="https://github.com/laraibmujeeb" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-indigo-600" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-105 transition-transform hover:bg-purple-50" 
                asChild
              >
                <a href="https://www.linkedin.com/in/laraib-mujeeb-6b977b1b1/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-purple-600" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-105 transition-transform hover:bg-pink-50" 
                asChild
              >
                <a href="mailto:mujeeblaraib@gmail.com">
                  <Mail className="h-5 w-5 text-pink-600" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:scale-105 transition-transform hover:bg-emerald-50" 
                asChild
              >
                <a href="tel:+918299371557">
                  <Phone className="h-5 w-5 text-emerald-600" />
                </a>
              </Button>
            </div>
            <div className="text-center mt-8 space-y-3">
              <p className="flex items-center justify-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail className="h-4 w-4" />
                mujeeblaraib@gmail.com
              </p>
              <p className="flex items-center justify-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Phone className="h-4 w-4" />
                +91 8299371557
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

