import Pill from "@/components/core/pill/Pill";
import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";
import MongodbLogo from "@/components/logos/mongodb";
import MysqlLogo from "@/components/logos/mysql";
import PostgresLogo from "@/components/logos/postgres";
import PrismaLogo from "@/components/logos/prisma";
import SqliteLogo from "@/components/logos/sqlite";
import SupabaseLogo from "@/components/logos/supabase";

export default function Databases() {
  return (
    <Section size="md">
      <SectionHeader
        title={
          <>
            Your favourite vehicles
            <br />
            managed by LogicAuto.
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
    <img src="vehicle-data-logo.png" alt="Vehicle Data Logo" className="h-4 text-violet-400" />
    <b className="text-white font-poppins">Vehicle Data Management</b>
  </Pill>
  <Pill>
    <img src="vehicle-tracking-logo.png" alt="Vehicle Tracking Logo" className="h-4 text-violet-400" />
    <b className="text-white font-poppins">Vehicle Tracking</b>
  </Pill>
  <Pill>
    <img src="fleet-management-logo.png" alt="Fleet Management Logo" className="h-4 text-violet-400" />
    <b className="text-white font-poppins">Fleet Management</b>
  </Pill>
  <Pill>
    <img src="maintenance-scheduling-logo.png" alt="Maintenance Scheduling Logo" className="h-4 text-violet-400" />
    <b className="text-white font-poppins">Maintenance Scheduling</b>
  </Pill>
  <Pill>
    <img src="driver-behavior-analysis-logo.png" alt="Driver Behavior Analysis Logo" className="h-4 text-violet-400" />
    <b className="text-white font-poppins">Driver Behavior Analysis</b>
  </Pill>
</div>

        </div>
        <div className="flex w-full overflow-hidden">
  <div className="flex flex-col w-full border rounded-lg bg-gradient-to-b from-slate-800/60 to-card/20 backdrop-blur-sm border-border/20">
    <div className="relative flex justify-center w-full p-4">
      <span className="absolute w-4 h-4 transition-all rounded-full left-4 top-5 bg-indigo-400/15 hover:bg-red-400" />
      <span className="absolute w-4 h-4 transition-all rounded-full left-9 top-5 bg-indigo-400/15 hover:bg-yellow-400" />
      <span className="absolute w-4 h-4 transition-all rounded-full left-14 top-5 bg-indigo-400/15 hover:bg-green-400" />
      <b className="font-poppins">vehicle.schema</b>
    </div>
    <code className="block w-full p-4 pb-7">
      <pre className="w-full overflow-x-scroll">
        <span
          data-number="1"
          className="block w-full font-medium before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
        >{`model Vehicle {`}</span>
        <span
          data-number="2"
          className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
        >
          {`    `}
          <span className="text-cyan-300">id</span>
          {` Int `}
          <span className="text-lime-400"> @id @default(autoincrement())</span>
        </span>
        <span
          data-number="3"
          className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
        >
          {`    `}
          <span className="text-cyan-300">brand</span>
          {` String`}
        </span>
        <span
          data-number="4"
          className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
        >
          {`    `}
          <span className="text-cyan-300">model</span>
          {` String`}
        </span>
        <span
          data-number="5"
          className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
        >
          {`    `}
          <span className="text-cyan-300">year</span>
          {` Int`}
        </span>
        <span
          data-number="6"
          className="block w-full before:content-[attr(data-number)] before:w-10 before:mr-4 before:inline-flex before:text-indigo-500 before:justify-center"
        >{`}`}</span>
      </pre>
    </code>
    <form className="flex flex-col p-4">
      <input type="text" placeholder="Brand" className="input mb-2" />
      <input type="text" placeholder="Model" className="input mb-2" />
      <input type="number" placeholder="Year" className="input mb-2" />
      <button type="submit" className="btn btn-primary">Add Vehicle</button>
    </form>
  </div>
</div>

      </div>
    </Section>
  );
}
