import React from 'react';
import { Section } from '@/components/core/section/Section';
import { SectionHeader } from '@/components/core/section/SectionHeader';
import { CommandMenu } from './command-menu';
import Pill from '@/components/core/pill/Pill';
import { Database, MapPin, Truck, Calendar, UserCheck } from "lucide-react";

export default function Databases() {
  return (
    <Section size="md">
      <SectionHeader
        title={
          <>
            Everything in one place
          </>
        }
      />
      <div className="grid w-full max-w-4xl gap-6 mx-auto md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-6">
          <div>
            <img src="logo.png" alt="Logo" width={100} height={100} />
          </div>
          <div className="flex flex-wrap justify-center gap-3 p-4">
            <Pill>
              <Database className="h-4 text-violet-400" />
              <b className="text-white font-poppins">Vehicle Data Management</b>
            </Pill>
            <Pill>
              <MapPin className="h-4 text-violet-400" />
              <b className="text-white font-poppins">Vehicle Tracking</b>
            </Pill>
            <Pill>
              <Truck className="h-4 text-violet-400" />
              <b className="text-white font-poppins">Fleet Management</b>
            </Pill>
            <Pill>
              <Calendar className="h-4 text-violet-400" />
              <b className="text-white font-poppins">Maintenance Scheduling</b>
            </Pill>
            <Pill>
              <UserCheck className="h-4 text-violet-400" />
              <b className="text-white font-poppins">Driver Behavior Analysis</b>
            </Pill>
          </div>
        </div>
        <div>
          <CommandMenu />
        </div>
      </div>
    </Section>
  );
}
