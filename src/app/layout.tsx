import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/components/portfolio/Providers";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Md. Soliman Sikder | Frontend Developer",
  description: "Portfolio of Md. Soliman Sikder — frontend developer building thoughtful digital experiences.",
  applicationName: "Soliman Portfolio",
};

export const viewport: Viewport = { themeColor: "#0b0d10", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Providers>{children}</Providers><Analytics /></body></html>;
}
