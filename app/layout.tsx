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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={fontQuicksand.variable} lang="en">
      <body className="font-quicksand">
        <MainHeaderBackground />
        <MainHeader />
        <main className="_container flex gap-7 mt-10">{children}</main>
      </body>
    </html>
  );
}
