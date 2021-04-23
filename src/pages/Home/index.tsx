import "./styles.scss";

import BottomList from "./components/BottomList";
import Hero from "./components/Hero";
import Layout from "../../layout/MainLayout";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel/index";

export default function Home() {
  const goToSite = (str) => {
    window.open(str, "_blank");
  };

  return (
    <Layout hasSnow={true}>
      <div className="container">
        <Hero goToSite={goToSite} />
      </div>
      <BottomList goToSite={goToSite} />
      <Carousel />
      <Footer />
    </Layout>
  );
}
