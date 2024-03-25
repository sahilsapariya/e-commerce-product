import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce Product Page",
  description: "This is a product page for an e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
