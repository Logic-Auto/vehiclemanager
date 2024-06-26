import { NextAuthProvider } from "@/components/core/provider/NextAuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "@/lib/utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import { UserProvider } from '@auth0/nextjs-auth0/client';

import "@/styles/globals.css";

export default function LocaleLayout({
  children,
  // modal,
  params: { locale },
}: {
  children: React.ReactNode;
  // modal: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className={`${poppins.variable} dark`}>
      <body className="flex flex-col min-h-screen font-sans antialiased bg-background dark">
        <UserProvider>
          {children}
          {/* {modal} */}
          <Toaster position="top-center" richColors />
        </UserProvider>
        <Analytics />
      </body>
    </html>
  );
}
