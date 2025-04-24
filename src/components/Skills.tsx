
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skills = [
    "PHP", "JavaScript", "AWS", "React", "Node.js",
    "MySQL", "Git", "HTML", "CSS", "TypeScript"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
