
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        <Card className="backdrop-blur-sm bg-white/50 shadow-lg">
          <CardContent className="pt-6">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Senior Full Stack Web Developer with over 2 years of expertise in designing and implementing scalable web applications using AWS & PHP stack.
                I specialize in creating efficient, maintainable code that drives business growth.
              </p>
              <p>
                Passionate about modern web technologies and best practices, I consistently deliver high-quality solutions
                that exceed client expectations and drive measurable results.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
