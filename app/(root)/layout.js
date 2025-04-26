import React from "react";
import "../globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

const metadata = {
  title: "Hruthik M",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="false">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
