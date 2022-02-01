import React, { FunctionComponent } from "react";

type ParallaxImageProps = {
  imagePath: string;
};

const ParallaxImage: FunctionComponent<ParallaxImageProps> = ({
  imagePath
}) => {
  const backgroundImage = { backgroundImage: `url(${imagePath})` };
  return (
    <div
      className="parallax bg-scroll md:bg-fixed bg-center bg-top bg-no-repeat bg-cover h-full"
      style={backgroundImage}
    />
  );
};

export default ParallaxImage;
