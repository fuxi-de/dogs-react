import type { NextPage } from "next";

import TextArea from "../components/modules/TextArea";
import ParallaxImage from "../components/modules/ParallaxImage";
import BaseSection from "../components/modules/BaseSection";

const Home: NextPage = () => {
  return (
    <main>
      <BaseSection>
        <TextArea headline="Test" content="Blabla" />
      </BaseSection>

      <BaseSection>
        <ParallaxImage imagePath="/images/wiesbachaue.jpg" />
      </BaseSection>

      <BaseSection>
        <TextArea headline="Blub" content="blublu" />
      </BaseSection>
    </main>
  );
};

export default Home;
