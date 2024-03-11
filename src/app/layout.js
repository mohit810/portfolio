import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/[...components]/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-black bg-white grid grid-cols-1">
        <Header />
        <div className={"pt-24 px-6 " + inter.className}>{children}</div>
      </body>
    </html>
  );
}
