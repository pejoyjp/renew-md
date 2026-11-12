import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMStrong® Infinity — A stronger foundation",
  description: "Discover a more thoughtful approach to pelvic wellness with EMStrong Infinity.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
