import React from "react";
import HomeButton from "./HomeButton";
import AboutButton from "./AboutButton";
import ContactButton from "./ContactButton";

function NavBar() {
  return (
    <nav>
      <ul className="flex justify-center w-full gap-3 py-3">
        <li>
          <HomeButton />
        </li>
        <li>
          <AboutButton />
        </li>
        <li>
          <ContactButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
