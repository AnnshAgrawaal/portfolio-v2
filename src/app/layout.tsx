import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-poppins",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Annsh Agrawaal - Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dancingScript.variable} font-sans antialiased`}>
        {children}
        <script src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"></script>
        <script src="https://files.bpcontent.cloud/2025/04/26/13/20250426133833-RRBBL3YX.js"></script>
      </body>
    </html>
  );
}
