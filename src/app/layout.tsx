import type { Metadata } from "next";
import "./globals.css";

import NavBar from "@/app/components/NavBar";

import { Space_Mono } from "next/font/google";
import Link from "next/link";
import { Toaster } from "sonner";

const space_mono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cha-Ching | Track your finances",
  description: "A simple app to help you track your finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${space_mono.className} bg-slate-200 antialiased dark:bg-slate-900`}
      >
        <NavBar />

        {children}

        <footer className="container my-8 text-center md:my-16 dark:text-slate-300">
          Made with ❤️ by{" "}
          <Link href="https://hollos.dev/" className="underline">
            James Hollos
          </Link>
        </footer>

        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 2000,
            unstyled: true,
            classNames: {
              toast:
                "rounded-none flex items-center bg-white p-4 border-2 border-black gap-2",
            },
          }}
        />
      </body>
    </html>
  );
}
