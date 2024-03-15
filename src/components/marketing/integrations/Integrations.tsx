import GradientText from "@/components/core/gradient-text/GradientText";
import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, GlassWater } from "lucide-react";

export default function Integrations() {
  return (
    <div className="max-w-6xl mx-auto">
      <Section size="md">
        <SectionHeader
          title={
            <>
              Powerful integrations <br />
              <GradientText>out of the box.</GradientText>
            </>
          }
          description={
            <p>
              Enhance your vehicle management with these integrated features and services.
            </p>
          }
        />
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          <Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
            <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
            <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
              <CardHeader className="relative">
                <Car className="h-14 mb-2 text-white" />
                <CardTitle className="text-white text-md">
                  Vehicle Inventory
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p>
                  Manage your vehicle inventory with ease and keep track of vehicle details.
                </p>
              </CardContent>
            </div>
          </Card>

          <Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
            <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
            <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
              <CardHeader className="relative">
                <GlassWater className="h-14 mb-2 text-white" />
                <CardTitle className="text-white text-md">
                  Fuel Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p>
                  Monitor fuel consumption and track fuel expenses for your vehicles.
                </p>
              </CardContent>
            </div>
          </Card>

          {/* Add more integration examples here */}

        </div>
      </Section>
    </div>
  );
}
