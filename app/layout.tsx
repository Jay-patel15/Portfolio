import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaypatel.dev"),
  title: "Jay Patel — Data Analyst",
  description:
    "Jay Patel is a Data Analyst specializing in Python, SQL, Power BI, and Machine Learning, based in Thane, Maharashtra.",
  keywords: [
    "Jay Patel",
    "Data Analyst",
    "Python",
    "SQL",
    "Power BI",
    "Machine Learning",
    "Data Analytics Portfolio",
  ],
  authors: [{ name: "Jay Patel" }],
  openGraph: {
    title: "Jay Patel — Data Analyst",
    description:
      "Data Analyst specializing in Python, SQL, Power BI, and Machine Learning.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Patel — Data Analyst",
    description:
      "Data Analyst specializing in Python, SQL, Power BI, and Machine Learning.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-void-950 font-display text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
