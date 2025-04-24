
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h2>
        <div className="space-y-6">
          <Card className="backdrop-blur-sm bg-white/50 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Briefcase className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <CardTitle>Senior Full-stack Developer</CardTitle>
                  <p className="text-sm text-gray-500">Weber Consulting • 2022 - Present</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Led development of enterprise-level web applications using AWS & PHP stack</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                <li>Implemented CI/CD pipelines improving deployment efficiency by 40%</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
