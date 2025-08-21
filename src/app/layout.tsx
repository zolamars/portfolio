import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zelalem - Frontend Developer & Scrum Master",
  description:
    "Portfolio of Zelalem, a passionate Frontend Developer and Scrum Master specializing in React, Next.js, and modern web technologies with growing expertise in AI and Python development.",
  keywords: [
    "Frontend Developer",
    "Scrum Master",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "AI",
    "Python",
    "Machine Learning",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Zelalem Abera Regassa" }],
  creator: "Zelalem Abera Regassa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zelalemabera.vercel.app",
    title: "Zelalem - Frontend Developer & Scrum Master",
    description:
      "Portfolio of Zelalem, a passionate Frontend Developer and Scrum Master specializing in React, Next.js, and modern web technologies with growing expertise in AI and Python development.",
    siteName: "Zelalem Portfolio",
    images: [
      {
        url: "/pic.jpg",
        width: 1200,
        height: 630,
        alt: "Zelalem Abera Regassa - Frontend Developer & Scrum Master",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelalem - Frontend Developer & Scrum Master",
    description:
      "Portfolio of Zelalem, a passionate Frontend Developer and Scrum Master specializing in React, Next.js, and modern web technologies with growing expertise in AI and Python development.",
    images: ["/pic.jpg"],
  },
  icons: {
    icon: "/pic.jpg",
    shortcut: "/pic.jpg",
    apple: "/pic.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="zolbera-theme">
          <div className="min-h-screen bg-background font-sans antialiased">
            <Navigation />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
