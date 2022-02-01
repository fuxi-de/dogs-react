import React, { FunctionComponent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

type IntroProps = {
  introText: string;
  imagePath: string;
};

const IntroSection: FunctionComponent<IntroProps> = ({
  introText,
  imagePath
}) => {
  const router = useRouter();
  const isHomepage = router.asPath === "/";

  const backgroundImage = { backgroundImage: `url(${imagePath})` };

  return (
    <IntroWrapper
      className="intro bg-scroll md:bg-fixed bg-center bg-top bg-no-repeat bg-cover h-full"
      style={backgroundImage}
    >
      <IntroLayer className="layer">
        <span className="mx-auto">
          <p className="text-3xl md:text-5xl leading-snug">{introText}</p>
          {isHomepage && (
            <Image
              className="hidden md:block"
              src="/images/barf.png"
              alt="Barf Logo"
              width={150}
              height={150}
            />
          )}
        </span>
      </IntroLayer>
    </IntroWrapper>
  );
};

const IntroWrapper = styled.div`
  position: relative;
`;

const IntroLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  span {
    font-family: "Work Sans", sans-serif;
    width: 50%;
    display: block;
    padding-top: 13rem;
    color: #f4d8cd;
  }
`;

export default IntroSection;
