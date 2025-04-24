
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skills = {
    "Frontend": ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    "Backend": ["PHP", "Node.js", "MySQL"],
    "DevOps": ["AWS", "Docker", "Git", "CI/CD"],
    "Other": ["Agile", "Team Leadership", "System Design"]
  };

  return (
    <section id="skills" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
        <Card className="backdrop-blur-sm bg-white/50 shadow-lg">
          <CardContent className="pt-6">
            <div className="space-y-6">
              {Object.entries(skills).map(([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
