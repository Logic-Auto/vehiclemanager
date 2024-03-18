import { SectionHeader } from "@/components/core/section/SectionHeader";
import { Section } from "@/components/core/section/Section";
import Pill from "@/components/core/pill/Pill";
import { Car, Settings, Map, Droplet, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"; // Import additional icons

import Logo from "@/components/core/brand/Logo";

export default function Features() {
  return (
    <Section size="md">
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-[178px] h-[178px] rounded-full bg-transparent border-2 border-border/60 backdrop-blur-sm shadow-[0_0_80px_0_theme(colors.indigo.500/20%)]">
            <Logo className="h-16" />
              <ArrowRight className="" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center mt-16 lg:mt-0">
          <div className="flex flex-col items-start justify-center gap-6 lg:mr-6">
            <SectionHeader
              title={
                <>
                  Current Problems 
                </>
              }
            />
            <Pill>
              <ArrowRight className="h-4 text-violet-400 mr-2" />
              <b className="text-white font-poppins">Difficulty managing vehicle inventory</b>
            </Pill>
            <Pill>
              <ArrowRight className="h-4 text-violet-400 mr-2" />
              <b className="text-white font-poppins">Lack of insights into vehicle costs</b>
            </Pill>
            <Pill>
              <ArrowRight className="h-4 text-violet-400 mr-2" />
              <b className="text-white font-poppins">Forgetting maintenance schedules</b>
            </Pill>
            <Pill>
              <ArrowRight className="h-4 text-violet-400 mr-2" />
              <b className="text-white font-poppins">Unable to track fuel consumption effectively</b>
            </Pill>
          </div>
          <div className="flex flex-col items-start justify-center gap-6 lg:ml-6">
            <SectionHeader
              title={
                <>
                  Features
                </>
              }
            />
            <Pill>
              <ArrowRight className="h-4 text-violet-400 mr-2" />
              <b className="text-white font-poppins">Vehicle Inventory Management</b>
            </Pill>
            <Pill>
              <ArrowRight className="h-4 text-violet-400 mr-2" />
              <b className="text-white font-poppins">Cost Analysis Tools</b>
            </Pill>
            <Pill>
              <ArrowRight className="h-4 text-violet-400 mr-2" />
              <b className="text-white font-poppins">Maintenance Reminders</b>
            </Pill>
            <Pill>
              <ArrowRight className="h-4 text-violet-400 mr-2" />
              <b className="text-white font-poppins">Fuel Tracking and Analysis</b>
            </Pill>
          </div>
        </div>
      </div>
    </Section>
  );
}
