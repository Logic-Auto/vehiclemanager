import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <div className="max-w-4xl mx-auto">
      <Section size="md">
        <SectionHeader
          title={
            <>
              Frequently asked <br />
              questions...
            </>
          }
        />
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          <AccordionItem
            value="item-1"
            className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-4 text-left text-white text-balance">
              How can I add a new vehicle?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base">
              To add a new vehicle, navigate to the Vehicles section in your
              dashboard and click on the Add Vehicle button. Fill in the
              required information such as make, model, year, and license plate
              number, then save the changes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-4 text-left text-white text-balance">
              Can I track my vehicle's maintenance schedule?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base">
              Yes, you can track your vehicle's maintenance schedule using the
              Maintenance feature in the dashboard. Set up regular maintenance
              tasks such as oil changes and tire rotations, and receive
              notifications when they are due.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-4 text-left text-white text-balance">
              How do I renew my vehicle registration?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base">
              To renew your vehicle registration, check the expiration date of
              your current registration and submit the required documents and
              fees to your local DMV or relevant authority before the deadline.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-4 text-left text-white text-balance">
              Can I track my vehicle's location in real-time?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base">
              Yes, you can track your vehicle's location in real-time using GPS
              tracking devices. Install a GPS tracker in your vehicle and
              connect it to a tracking service to monitor its location and
              movement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="p-4 text-left text-white text-balance">
              How can I maintain my vehicle's performance?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base">
              To maintain your vehicle's performance, follow the manufacturer's
              recommended maintenance schedule, including regular oil changes,
              tire rotations, and fluid checks. Also, drive responsibly and
              avoid aggressive driving habits.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>
    </div>
  );
}
