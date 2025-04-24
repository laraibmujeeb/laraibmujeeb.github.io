
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
        <div className="space-y-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
                <CardTitle>University Institute of Engineering and Technology, Kanpur</CardTitle>
              </div>
              <p className="text-sm text-gray-500">Bachelor of Technology (B.Tech)</p>
              <p className="text-sm text-gray-500">July 2015 – May 2019</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Completed Bachelor's degree in Engineering, gaining comprehensive technical knowledge and skills.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <School className="w-8 h-8 text-purple-600" />
                <CardTitle>Halim Muslim English School, Kanpur</CardTitle>
              </div>
              <p className="text-sm text-gray-500">Senior Secondary (XII – CBSE)</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Completed Senior Secondary Education with a strong academic foundation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
