import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";
import Pill from "@/components/core/pill/Pill";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NextintlLogo from "@/components/logos/nextintl";
import { CommandMenu } from "../databases/command-menu";


export default function International() {
  return (
    <div className="max-w-4xl mx-auto">
      <Section size="md">
        <SectionHeader
          title={
            <>
              Explore powerful insights
            </>
          }
        />
        <div className="grid max-w-5xl gap-6 mx-auto md:grid-cols-2">
          <div className="flex order-2 overflow-hidden md:order-1">
            <div className="flex flex-col w-full border rounded-lg bg-gradient-to-b from-slate-800/60 to-card/20 backdrop-blur-sm border-border/20">
              <Tabs defaultValue="one" className="w-full">
                <div className="relative flex justify-center w-full p-4">
                  <span className="absolute w-4 h-4 transition-all rounded-full left-4 top-5 bg-indigo-400/15 hover:bg-red-400" />
                  <span className="absolute w-4 h-4 transition-all rounded-full left-9 top-5 bg-indigo-400/15 hover:bg-yellow-400" />
                  <span className="absolute w-4 h-4 transition-all rounded-full left-14 top-5 bg-indigo-400/15 hover:bg-green-400" />
                  <TabsList className="h-auto p-0 mx-auto bg-transparent text-inherit -my-1.5">
                    <TabsTrigger
                      value="one"
                      className="m-0 text-sm md:text-base data-[state=active]:bg-background/50 data-[state=active]:text-purple-400"
                    >
                      <b>Chart Integration</b>
                    </TabsTrigger>
                    <TabsTrigger
                      value="two"
                      className="m-0 text-sm md:text-base data-[state=active]:bg-background/50 data-[state=active]:text-purple-400"
                    >
                      <b>Data Visualization</b>
                    </TabsTrigger>
                    <TabsTrigger
                      value="three"
                      className="m-0 text-sm md:text-base data-[state=active]:bg-background/50 data-[state=active]:text-purple-400"
                    >
                      <b>Vehicle Data Providers</b>
                    </TabsTrigger>
                    <TabsTrigger
                      value="four"
                      className="m-0 text-sm md:text-base data-[state=active]:bg-background/50 data-[state=active]:text-purple-400"
                    >
                      <b>Map Integration</b>
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="one" className="w-full">
                  <div className="flex justify-center p-4">
                  </div>
                  <p className="text-center p-4">Visualize your vehicle data with interactive charts and graphs.</p>
                </TabsContent>
                <TabsContent value="two" className="w-full">
                  <div className="flex justify-center p-4">
                  </div>
                  <p className="text-center p-4">Create stunning visual representations of your vehicle data.</p>
                </TabsContent>
                <TabsContent value="three" className="w-full">
                  <div className="flex justify-center p-4">
                  </div>
                  <p className="text-center p-4">Access a wide range of vehicle data from various providers.</p>
                </TabsContent>
                <TabsContent value="four" className="w-full">
                  <div className="flex justify-center p-4">
                  </div>
                  <p className="text-center p-4">Integrate maps to track and visualize vehicle locations.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center order-1 gap-6 md:order-2">
            <div>
              <img src="/logo3.png" alt="Logo" width={100} height={100} />
            </div>
            <div className="flex flex-wrap justify-center gap-3 p-4">
  <Pill>
    <b className="text-white font-poppins">Chart Integration</b>
  </Pill>
  <Pill>
    <b className="text-white font-poppins">Data Visualization</b>
  </Pill>
  <Pill>
    <b className="text-white font-poppins">Vehicle Data Providers</b>
  </Pill>
  <Pill>
    <b className="text-white font-poppins">Map Integration</b>
  </Pill>
  {/* Add more feature pills as needed */}
</div>
          </div>
        </div>
      </Section>
    </div>
  );
}
