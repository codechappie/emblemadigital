import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/theme.css";
import { Html } from "next/document";
import Head from "next/head";
import { Metadata } from "next";


const Inter = localFont({
  src: [
    {
      path: './fonts/inter-v12-latin-300.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/inter-v12-latin-500.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/inter-v12-latin-700.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--inter-sans',
});

export default function RootLayout({
  metadata,
  children,
}: Readonly<{
  children: React.ReactNode; metadata: Metadata;
}>) {
  return (
    <html lang="en">

      <body
        className={`${Inter.variable} bg-black text-white mt-0 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
