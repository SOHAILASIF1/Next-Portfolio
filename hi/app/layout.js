import { Creepster } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar/page";

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
        <div className="fixed inset-0 -z-20 horror-fog"></div>

        {/* Pulse Layer */}
        <div className="fixed inset-0 -z-10 horror-pulse mix-blend-overlay"></div>

        {/* Content */}
        <div className="relative min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
