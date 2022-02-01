import React, { FunctionComponent, PropsWithChildren } from "react";

const BaseSection: FunctionComponent = ({
  children
}: PropsWithChildren<any>) => (
  <div className="section h-screen mx-auto">{children}</div>
);

export default BaseSection;
