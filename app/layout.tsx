import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshith Nair — The Garage | Robotics & AI Engineer",
  description: "Step inside Harshith Nair’s interactive garage. Explore AI, full-stack engineering, product experiments and the ideas behind them.",
  openGraph: {title: "Harshith Nair — The Garage", description: "Some people have portfolios. I have a garage. Explore my projects, ideas and work.", type: "website"},
  keywords: ["Harshith Nair", "Robotics & AI Engineer", "AI Engineer", "Full Stack Developer", "Product Builder"],
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
