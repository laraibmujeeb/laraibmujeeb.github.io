
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
                  <CardTitle>Full Stack Developer</CardTitle>
                  <p className="text-sm text-gray-500">Multiple Projects • 3+ Years</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Developed multi-tenant SaaS applications and school fee management systems using Laravel and React.js</li>
                <li>Built property tax systems for government organizations with secure authentication and role management</li>
                <li>Created fitness platforms with social features using Vue.js and Laravel backend</li>
                <li>Implemented admin panels using FilamentPHP for efficient content management</li>
                <li>Designed and optimized MySQL databases for scalable applications</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
