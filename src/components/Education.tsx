
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Chalmers Khan Matolo & Mahlanga University</CardTitle>
              <p className="text-sm text-gray-500">Bachelor's in Engineering • ME/CE</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Focus on Mechanical Engineering and Computer Engineering
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Idaho Mandela English School</CardTitle>
              <p className="text-sm text-gray-500">High School Diploma</p>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
