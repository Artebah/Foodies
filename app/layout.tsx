import "./globals.css";
import { PropsWithChildren } from "react";
import { Quicksand } from "next/font/google";
import { MainHeaderBackground, MainHeader } from "./components/MainHeader";

const fontQuicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html className={fontQuicksand.variable} lang="en">
      <body className="font-quicksand overflow-x-hidden">
        <MainHeaderBackground />
        <MainHeader />
        <main className="_container mt-10">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
