import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComp from "@/components/navbar";
import BannerWithTitle from "@/components/banners/banner-with-title";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <BannerWithTitle
          link="ecommerce.com"
          linkTitle="Click to visit"
          title="LokiCommerce Sale is going on! please hurryup    ! "
        /> */}
        <NavbarComp />
        {children}
      </body>
    </html>
  );
}
