import "./globals.css";
import type { Metadata } from "next";
import { Lato, Forum } from "@next/font/google";
import Navbar from "@/components/ui/navbar/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const forum = Forum({
  weight: ["400"],
  subsets: ["latin-ext"],
  variable: "--font-forum",
});

export const metadata: Metadata = {
  title: "FrameFusion",
  description:
    "We are an online store specializing in premium wall paintings and frames that are meticulously curated to elevate your home or office décor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${lato.variable} ${forum.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
