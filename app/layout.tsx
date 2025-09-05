import type { Metadata } from "next";
import { Jaldi, Jersey_10 } from "next/font/google";
import NavMain from "./components/nav-main";
import SearchBar from "./components/search";
import FooterMain from "./components/footer-main";
import "./globals.css";
import RandomButton from "./components/random-button";

const jaldi = Jaldi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jaldi",
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey",
});

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Explore the world of Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jaldi.variable} ${jersey.variable} antialiased`}>
        <header className="content-grid">
          <NavMain />
        </header>
        <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
          <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
            Gotta catch 'em all!
          </h1>
          <p className="text-center text-white text-xl">
            Discover, search and explore the amazing world of Pokémon. Find
            <br /> your favourite and learn about their stats.
          </p>
          <RandomButton />
        </section>
        <SearchBar />
        <section className="bg-purple-100 m-0 pt-5 pb-5">{children}</section>
        <FooterMain />
      </body>
    </html>
  );
}
