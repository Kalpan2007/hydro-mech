import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hydro Mech Engineers | Precision Hydraulic Metal Forming Machinery",
  description:
    "Hydro Mech Engineers - Leading manufacturer of hydraulic metal formingmachines including Busbar Processing, Clinching, Section Bending, and Plate Rolling machines. Trusted by industry leaders since 1995.",
  keywords:
    "hydraulic machines, busbar processing, metal forming, clinching machine, section bending, plate rolling, industrial machinery India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
