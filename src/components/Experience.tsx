
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Briefcase className="h-6 w-6 text-indigo-600" />
                <div>
                  <CardTitle>Full-stack Developer</CardTitle>
                  <p className="text-sm text-gray-500">Weber Consulting • Full-time</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Developed and maintained web applications using AWS & PHP stack. 
                Collaborated with cross-functional teams to deliver high-quality software solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
