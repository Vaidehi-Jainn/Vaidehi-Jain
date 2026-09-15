import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { InteractiveBackground } from "@/components/layout/InteractiveBackground";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/components/layout/Providers";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vaidehi-jainn.github.io/Vaidehi-Jain"),
  title: {
    default: "Vaidehi Jain | Frontend Developer",
    template: "%s | Vaidehi Jain",
  },
  description:
    "Vaidehi Jain is a Frontend Developer, React Developer, Next.js Developer, and UI/UX Designer building responsive enterprise dashboards, e-commerce interfaces, landing pages, and marketplace platforms.",
  openGraph: {
    title: "Vaidehi Jain | Frontend Developer",
    description: "Modern frontend developer portfolio for React, Next.js, Tailwind CSS, Material UI, and UI/UX design work.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <LoadingScreen />
          <ScrollProgress />
          <InteractiveBackground />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
