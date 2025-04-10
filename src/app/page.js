import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}
