import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhany Arya Pratama | QA Engineer — Automation & Manual Testing Specialist",
  description:
    "Portfolio of Dhany Arya Pratama — QA Engineer specializing in Automation Testing (Playwright, Selenium, Appium) and Manual Testing with proven track record in enterprise quality assurance.",
  keywords: [
    "QA Engineer",
    "Automation Testing",
    "Playwright",
    "Selenium",
    "Appium",
    "Manual Testing",
    "Dhany Arya Pratama",
    "Quality Assurance",
  ],
  authors: [{ name: "Dhany Arya Pratama" }],
  openGraph: {
    title: "Dhany Arya Pratama | QA Engineer",
    description:
      "QA Engineer specializing in Automation & Manual Testing with expertise in Playwright, Selenium, and Appium.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
