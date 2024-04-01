import GradientText from "@/components/core/gradient-text/GradientText";
import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityIcon, BarChart2Icon, Car, DatabaseIcon, GlassWater, SettingsIcon, ShieldIcon } from "lucide-react";

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
      <BarChart2Icon className="h-14 mb-2 text-white" />
      <CardTitle className="text-white text-md">
        Advanced Analytics
      </CardTitle>
    </CardHeader>
    <CardContent className="relative">
      <p>
        Access advanced analytics tools to gain deeper insights into your vehicle data.
      </p>
    </CardContent>
  </div>
</Card>

<Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
  <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
  <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
    <CardHeader className="relative">
      <SettingsIcon className="h-14 mb-2 text-white" />
      <CardTitle className="text-white text-md">
        AI-Powered Insights
      </CardTitle>
    </CardHeader>
    <CardContent className="relative">
      <p>
        Leverage AI algorithms to generate actionable insights for better decision-making.
      </p>
    </CardContent>
  </div>
</Card>

<Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
  <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
  <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
    <CardHeader className="relative">
      <ActivityIcon className="h-14 mb-2 text-white" />
      <CardTitle className="text-white text-md">
        Performance Monitoring
      </CardTitle>
    </CardHeader>
    <CardContent className="relative">
      <p>
        Monitor the performance of your vehicles in real-time and optimize operations.
      </p>
    </CardContent>
  </div>
</Card>

<Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
  <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
  <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
    <CardHeader className="relative">
      <DatabaseIcon className="h-14 mb-2 text-white" />
      <CardTitle className="text-white text-md">
        Data Management
      </CardTitle>
    </CardHeader>
    <CardContent className="relative">
      <p>
        Manage and organize your vehicle data efficiently for analysis and reporting.
      </p>
    </CardContent>
  </div>
</Card>

<Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
  <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
  <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
    <CardHeader className="relative">
      <ShieldIcon className="h-14 mb-2 text-white" />
      <CardTitle className="text-white text-md">
        Security and Compliance
      </CardTitle>
    </CardHeader>
    <CardContent className="relative">
      <p>
        Ensure your vehicle data is secure and compliant with industry regulations.
      </p>
    </CardContent>
  </div>
</Card>

<Card className="relative flex overflow-hidden md:grid-cols-1 lg:col-span-2 bg-background/70 backdrop-blur-sm border-border/20">
  <div className="absolute w-[170px] h-[170px] bg-purple-600/30 rounded-full -top-7 -left-7 z-[0] blur-2xl" />
  <div className="rounded-lg bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent">
    <CardHeader className="relative">
      <SettingsIcon className="h-14 mb-2 text-white" />
      <CardTitle className="text-white text-md">
        Customizable Dashboards
      </CardTitle>
    </CardHeader>
    <CardContent className="relative">
      <p>
        Customize your dashboard to display the most relevant vehicle data for your needs.
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
