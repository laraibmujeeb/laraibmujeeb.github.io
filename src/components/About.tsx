
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
                I'm a Full Stack Developer with over 3 years of experience building robust, scalable, and user-centric web applications. 
                I specialize in PHP (Laravel) for backend development and have strong expertise in JavaScript frameworks like React.js and Vue.js for frontend.
              </p>
              <p>
                Throughout my career, I've worked on diverse projects including multi-tenant SaaS applications, school fee management systems, 
                property tax systems for government organizations, and fitness platforms with social features.
              </p>
              <p>
                I'm enthusiastic about solving real-world problems with code, collaborating with teams, and constantly learning new technologies 
                to deliver efficient and modern digital solutions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
