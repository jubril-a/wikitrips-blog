import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose what you need
  variable: "--font-poppins",
});

export const metadata = {
  title: "Wikitrips Blog",
  description: "Wikitrips Travel & Tours Blog",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={poppins.variable}>
      <body className="pt-[100px]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
