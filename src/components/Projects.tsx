
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileText } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-br from-indigo-50/30 via-purple-50/30 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Featured Projects</h2>
        <div className="space-y-6">
          <Card className="backdrop-blur-sm bg-white/50 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Database className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <CardTitle>LMC Property Tax Evaluation</CardTitle>
                  <p className="text-sm text-gray-500">Government Project • Lunglei Municipal Corporation</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Digitized property data management system for streamlining tax operations. Built robust backend modules and 
                user-friendly interfaces for government staff usage.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Property profiling and survey data management</li>
                    <li>Dynamic form handling for property records</li>
                    <li>Secure authentication and role management</li>
                    <li>Tax generation and calculation system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full">Laravel</span>
                    <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full">FilamentPHP</span>
                    <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full">Vue.js</span>
                    <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full">Quasar</span>
                    <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/50 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <CardTitle>School Fee Management System</CardTitle>
                  <p className="text-sm text-gray-500">Multi-tenant SaaS Application</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                A comprehensive web application for automating school fee management and financial operations, 
                featuring multi-tenancy support and intuitive admin interfaces.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Multi-tenant architecture for multiple schools</li>
                    <li>Dynamic fee structure configuration</li>
                    <li>Student enrollment and management</li>
                    <li>Automated invoicing and payment tracking</li>
                    <li>Discount management system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full">Laravel</span>
                    <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full">Sanctum</span>
                    <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full">Vue.js</span>
                    <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full">Quasar</span>
                    <span className="px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
