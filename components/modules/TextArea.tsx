import React, { FunctionComponent } from "react";

type TextAreaProps = {
  headline: string;
  content: string;
};

const TextArea: FunctionComponent<TextAreaProps> = ({ headline, content }) => (
  <div className="h-full bg-light flex items-center">
    <div className="mx-auto md:w-2/3 w-4/5">
      <h2
        v-if="headline"
        className="block text-3xl text-center mb-16 font-semibold"
      >
        {headline}
      </h2>
      <p className="block mb-8 text-xl leading-loose font-light text-justify">
        {content}
      </p>
    </div>
  </div>
);

export default TextArea;
