
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-600 leading-relaxed">
              Full Stack Web Developer with 2+ years of hands-on experience in designing and developing scalable web applications using AWS & PHP stack.
              I'm passionate about creating clean, efficient code and implementing effective web solutions that help businesses grow.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
