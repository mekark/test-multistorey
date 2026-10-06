import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Multi-Storey Steel Building Contractor in Chennai | Mekark",
  description:
    "One partner, less risk. Mekark delivers multi-storey steel buildings with single-point design-build accountability, 40,000-tonne fabrication capacity and 175+ engineers.",
};

export const viewport: Viewport = {
  themeColor: "#060606",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="bg-[#060606] font-sans text-white">{children}</body>
    </html>
  );
}
