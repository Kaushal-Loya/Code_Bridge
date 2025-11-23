import type { Metadata } from "next";
import { Ubuntu, Jersey_10 } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Toaster } from "sonner";

const gameFont = Jersey_10({
  subsets: ["latin"],
  variable: "--font-game",
  weight: ["400"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "CodeBridge",
  description: "An Pixelated E-learning platform for learning and coding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" suppressHydrationWarning>
        <body className={`${gameFont.variable} ${ubuntu.variable}`}>
          <Provider>{children}</Provider>
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}
