import {
  IBM_Plex_Sans,
  Libertinus_Math,
  Montserrat,
  Raleway,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const roboto = Roboto({
  variable: "--font-1",
  subsets: ["latin"],
  display: "swap",
});

const libertinusMath = Libertinus_Math({
  variable: "--font-2",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const ibmPlex = Montserrat({
  subsets: ["latin"],
  weight: ["700"], // bold
  variable: "--font-hero",
  display: "swap",
});

export const metadata = {
  title: "Amitt Training and Consulting Services Limited",
  description:
    "A training, consulting, and advisory firm that empowers individuals and organizations through financial literacy, professional development, and startup support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${libertinusMath.variable} ${ibmPlex.variable} ${raleway.variable}`}
      >
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
