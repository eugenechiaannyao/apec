import { useEffect } from "react";
import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import Header from "../../components/Header";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const Home = () => {
  useEffect(() => {
    // Scroll up at the start
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "auto" });

    const handleLoad = () => {
      window.removeEventListener("load", handleLoad); // Remove the load event listener
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <Container>
      <Header />
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
    </Container>
  );
};

export default Home;
