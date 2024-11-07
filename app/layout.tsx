import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sporting Beyond by Virat Kohli | Your Source for Sports Domains",
  description:
    "Explore premium sports-related domains like SportingBeyond.org, SportingBeyond.co, and BeyondSporting.com. Ideal for building sports brands, blogs, and e-commerce sites.",
  keywords:
    "virat kohli, king kohli, kohli sporting beyond, virat sporting beyond, sports domains, sporting domains, premium domains, buy domain, sportingbeyond.org, sportingbeyond.co, beyondsporting.com, domain resale, brand name domains",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
