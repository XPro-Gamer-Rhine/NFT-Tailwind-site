import type { NextPage } from "next";
import Card from "../components/content";
import Slider from "../components/content-header";
import Navbar from "../components/Navbar";


const Home: NextPage = () => {
  return (
    <>
      <Navbar/>
      <Card/>
    </>
  );
};

export default Home;
