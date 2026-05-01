import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duballo Hospital Operational Manual",
  description: "Internal Operational Manual for Duballo Hospital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
