import React from "react";
import "../globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Hruthik M",
  description: "Full Stack Developer specializing in modern web technologies.",
  openGraph: {
    title: "Hruthik M",
    description: "Welcome to Hruthik's professional portfolio site!",
    url: "https://res.cloudinary.com/duozomapm/image/upload/v1736677246/Untitled_design__18_-removebg-preview_nnhgj4.png",
    siteName: "Hruthik M",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/duozomapm/image/upload/v1736677246/Untitled_design__18_-removebg-preview_nnhgj4.png"
          sizes="any"
        />
      </head>
      <body cz-shortcut-listen="false">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
