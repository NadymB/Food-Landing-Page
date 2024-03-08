import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
          <ThemeProvider>
            {/* <ToastContainer theme="dark" /> */}
            <main>{children}</main>
          </ThemeProvider>
        </body>
    </html>
  );
}
