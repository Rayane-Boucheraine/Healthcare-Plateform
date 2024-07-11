import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils'
import { ThemeProvider } from "@/components/theme-provider";

const FontSans = Plus_Jakarta_Sans({
   subsets: ["latin"],
   weight: ['300', '400', '500', '600', '700'],
   variable: '--font-sans' 
  });

export const metadata: Metadata = {
  title: "CarePulse",
  description: "A HealthCare Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          FontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
