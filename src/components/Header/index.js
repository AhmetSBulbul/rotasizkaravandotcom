import React from "react";
import Logo from "../Logo";
import * as styles from "./index.module.css";
import Navigation from "../Navigation";

import { Link } from "gatsby";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-black px-5">
      <div className="container h-20 flex flex-row justify-between mx-auto">
        <Link to="/" className="my-auto">
          <Logo className="w-52" />
        </Link>
        <Navigation />
      </div>
    </div>
  );
}
