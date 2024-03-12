import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import TransitionProvider from "./components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Portfolio App",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Huyen Nguyen</title>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>

      </body>
    </html>
  );
}
