import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zelalemabera.vercel.app"),
  title: {
    default: "Zelalem Abera Regassa - Senior Frontend Developer",
    template: "%s | Zelalem Abera Portfolio",
  },
  description:
    "Senior Frontend Developer & Scrum Master from Ethiopia specializing in React, Next.js, TypeScript, and AI development. 5+ years experience building scalable web applications, FinTech solutions, and modern user interfaces. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Zelalem Abera Regassa",
    "Senior Frontend Developer Ethiopia",
    "React Developer Addis Ababa",
    "Next.js Developer",
    "TypeScript Expert",
    "Scrum Master",
    "AI Developer Ethiopia",
    "Python Developer",
    "Machine Learning Ethiopia",
    "Web Developer Portfolio",
    "FinTech Developer",
    "JavaScript Expert",
    "Frontend Consultant",
    "Ethiopian Software Developer",
    "React Consultant",
    "UI/UX Developer",
    "Responsive Web Design",
    "Performance Optimization",
    "Agile Development",
    "Modern Web Technologies",
  ],
  authors: [
    { name: "Zelalem Abera Regassa", url: "https://zelalemabera.vercel.app" },
  ],
  creator: "Zelalem Abera Regassa",
  publisher: "Zelalem Abera Regassa",
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  category: "technology",
  classification: "portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zelalemabera.vercel.app",
    title: "Zelalem Abera Regassa - Senior Frontend Developer",
    description:
      "Senior Frontend Developer & Scrum Master from Ethiopia specializing in React, Next.js, TypeScript, and AI development. 5+ years experience building scalable web applications, FinTech solutions, and modern user interfaces.",
    siteName: "Zelalem Abera Portfolio",
    images: [
      {
        url: "/pic.jpg",
        width: 1200,
        height: 630,
        alt: "Zelalem Abera Regassa - Senior Frontend Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zolbera", // Add your Twitter handle
    creator: "@zolbera", // Add your Twitter handle
    title: "Zelalem Abera Regassa - Senior Frontend Developer",
    description:
      "Senior Frontend Developer & Scrum Master from Ethiopia. 5+ years experience in React, Next.js, TypeScript, and AI development. Available for projects.",
    images: {
      url: "/pic.jpg",
      alt: "Zelalem Abera Regassa - Senior Frontend Developer Portfolio",
    },
  },
  alternates: {
    canonical: "https://zelalemabera.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/pic.jpg", sizes: "32x32", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/pic.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
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
