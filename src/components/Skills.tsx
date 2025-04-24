
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skills = {
    "Frontend": ["React.js", "Vue.js", "JavaScript", "Quasar", "Tailwind CSS"],
    "Backend": ["PHP", "Laravel", "FilamentPHP", "MySQL", "RESTful APIs"],
    "Development": ["Git", "Docker", "CI/CD", "Agile", "Test-Driven Development"],
    "Other": ["Database Design", "System Architecture", "UI/UX Design", "Team Collaboration"]
  };

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-purple-50/30 via-pink-50/30 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center">Technical Skills</h2>
        <Card className="backdrop-blur-sm bg-white/80 shadow-xl hover:shadow-2xl transition-shadow border-t border-purple-100">
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
                        className="px-3 py-1 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 hover:from-indigo-100 hover:to-purple-100 transition-colors"
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
