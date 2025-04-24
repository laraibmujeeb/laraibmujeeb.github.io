
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Let's connect!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/laraibmujeeb" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/laraib-mujeeb-6b977b1b1/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:mujeeblaraib@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="tel:+918299371557">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="text-center mt-4 space-y-2 text-gray-600">
              <p>Email: mujeeblaraib@gmail.com</p>
              <p>Phone: +91 8299371557</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
