import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Michaela de Bruyn | Data Engineer", description: "Michaela de Bruyn — Data Engineer and Data Analyst portfolio." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
