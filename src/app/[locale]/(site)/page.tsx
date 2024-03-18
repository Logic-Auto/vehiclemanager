import Hero from "@/components/core/hero/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

import NextLogo from "@/components/logos/next";
import PrismaLogo from "@/components/logos/prisma";
import ShadcnuiLogo from "@/components/logos/shadcnui";
import SupabaseLogo from "@/components/logos/supabase";
import TailwindLogo from "@/components/logos/tailwind";

import Features from "@/components/marketing/features/Features";
import Testimonials from "@/components/marketing/testimonials/Testimonials";
import Integrations from "@/components/marketing/integrations/Integrations";
import Databases from "@/components/marketing/databases/Databases";
import FAQs from "@/components/marketing/faqs/FAQs";
import International from "@/components/marketing/international/International";
import LemonSqueezyLogo from "@/components/logos/lemonsqueezy";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: "VehicleManager.ai - Vehicle Management System",
  description:
    "VehicleManager.ai ivehicle management system for your future projects with Authentication",
};

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <Hero
        size="lg"
        title={t("title")}
        description={<p className="text-lg text-pretty">{t("subtitle")}</p>}
      >
      
        <Button asChild>
          <Link href="">
            Start managing your vehicles now!
          </Link>
        </Button>
      </Hero>

      <div className="container">
        <Features />
        <Integrations />
        <Databases />
        <International />
        <FAQs />
      </div>
    </>
  );
}
