import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michaela de Bruyn | Data Engineer & Data Analyst",
  description: "Portfolio of Michaela de Bruyn — Data Engineering, Analytics, SQL, Cloud and Data Modelling.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
