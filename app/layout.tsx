import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Des Moiner - Your Essential Guide to Des Moines, Iowa",
    template: "%s | Des Moiner - Discover the Best of Des Moines",
  },
  description:
    "Discover the best of Des Moines, Iowa with Des Moiner. Your go-to guide for events, restaurants, attractions, and local hidden gems.",
  openGraph: {
    title: "Des Moiner - Your Essential Guide to Des Moines, Iowa",
    description:
      "Explore the heart of the Midwest with Des Moiner. Find the hottest events, newest restaurants, hidden gems, and exclusive deals in Des Moines, Iowa.",
    url: baseUrl,
    siteName: "Des Moiner",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <SpeedInsights />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
