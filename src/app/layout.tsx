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
    default: "Vaidehi Jain | Software Engineer",
    template: "%s | Vaidehi Jain",
  },
  description:
    "Vaidehi Jain is a Software Engineer specializing in MERN Stack development, building scalable, responsive, and user-friendly web applications using MongoDB, Express.js, React.js, Node.js, Next.js.",
  openGraph: {
    title: "Vaidehi Jain | Software Engineer",
    description: "Building seamless digital experiences with modern technologies, clean code, and a focus on performance and scalability.",
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
