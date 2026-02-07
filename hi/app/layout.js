import { Creepster } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar/page";
import HorrorScene from "./component/HorrorScene";

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next JS Portfolio",
  description: "Horror Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${creepster.className} min-h-screen bg-black text-red-100 overflow-x-hidden`}
      >
        {/* Fog Layer */}
        <div className="fixed inset-0 -z-30 horror-fog"></div>

        {/* 3D Horror Background */}
        <HorrorScene />

        {/* Pulse Layer */}
        <div className="fixed inset-0 -z-10 horror-pulse mix-blend-overlay"></div>

        {/* Content */}
        <div className="relative min-h-screen z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

