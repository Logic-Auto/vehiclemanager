import { SectionHeader } from "@/components/core/section/SectionHeader";
import { Section } from "@/components/core/section/Section";
import Pill from "@/components/core/pill/Pill";

import { Car, Settings, Map } from "lucide-react";
import Logo from "@/components/core/brand/Logo";

export default function Features() {
  return (
    <Section size="md">
      <SectionHeader
        title={
          <>
            Manage your vehicles efficiently
            <br />
            with these features.
          </>
        }
      />
      <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-2">
          <Pill>
            <Car className="h-4 text-violet-400" />
            <b className="text-white font-poppins">Vehicle Inventory</b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">Cost Analysis</b>
          </Pill>
          <Pill>
            <Settings className="h-4 text-violet-400" />
            <b className="text-white font-poppins">Maintenance Reminders</b>
          </Pill>
          <Pill>
            <Map className="h-4 text-violet-400" />
            <b className="text-white font-poppins">Powerful Insights</b>
          </Pill>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-[178px] h-[178px] rounded-full bg-transparent border-2 border-border/60 backdrop-blur-sm shadow-[0_0_80px_0_theme(colors.indigo.500/20%)]">
            <Logo className="h-16 mt-2 ml-1" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Pill>
            <b className="text-white font-poppins">Fuel Tracking</b>
          </Pill>
          <Pill>
            <Settings className="h-4 text-violet-400" />
            <b className="text-white font-poppins">Customizable Settings</b>
          </Pill>
          <Pill>
            <Car className="h-4 text-violet-400" />
            <b className="text-white font-poppins">Vehicle Details</b>
          </Pill>
          <Pill>
            <div className="text-violet-400">Logs</div>
            <b className="text-white font-poppins">Maintenance Logs</b>
          </Pill>
        </div>
      </div>
    </Section>
  );
}
