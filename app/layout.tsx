import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import CursorProvider from "@/components/CursorProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Eakhlasur Rahman | Web Developer",
  description: "Portfolio of Eakhlasur Rahman, a Frontend Web Developer specializing in Next.js, React, and Angular. Building modern, scalable, and visually stunning web applications.",
  keywords: ["Eakhlasur Rahman", "Web Developer", "Frontend Developer", "Next.js", "React", "Angular", "TypeScript", "JavaScript", "Portfolio"],
  authors: [{ name: "Eakhlasur Rahman" }],
  creator: "Eakhlasur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eakhlasur.vercel.app", // Adjust if real domain is different
    title: "Eakhlasur Rahman | Web Developer",
    description: "Portfolio of Eakhlasur Rahman, a Frontend Web Developer specializing in Next.js, React, and Angular.",
    siteName: "Eakhlasur Rahman Portfolio",
    images: [
      {
        url: "/og-image.png", // Recommended size: 1200x630
        width: 1200,
        height: 630,
        alt: "Eakhlasur Rahman Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eakhlasur Rahman | Web Developer",
    description: "Building modern, scalable, and visually stunning web applications. Exploring Next.js, React, and Angular.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.gif",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.gif" type="image/gif" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
        >
          <CursorProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
