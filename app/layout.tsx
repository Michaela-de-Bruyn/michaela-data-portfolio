import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Michaela de Bruyn | GRC & Cybersecurity", description: "Michaela de Bruyn — technology professional with 7+ years across data engineering, analytics and IT, developing a focus in Governance, Risk & Compliance and cybersecurity." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
