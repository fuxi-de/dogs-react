import React, { FunctionComponent } from "react";
import Link from "next/link";

const Footer: FunctionComponent = () => (
  <footer className="text-black body-font bg-dark">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center">
        <span className="ml-3 text-xl text-center md:text-left">
          Kooikerhondjes von der Wiesbachaue
        </span>
      </a>
      <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">
        © 2020 Susanne Rütten
      </p>
      <div className="mt-4 md:mt-0 md:ml-8">
        <Link href="/impressum">Impressum</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
