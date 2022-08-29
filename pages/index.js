import Head from "next/head";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex px-2 h-screen w-screen flex-col text-white bg-[#D70F64] items-center justify-center py-2">
      <Head>
        <title>ChallengeVme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mb-20">
        {/* <Header /> */}
        <Card />
      </main>
      <footer className="absolute bottom-0">
        <Footer />
      </footer>
    </div>
  );
}
