import React from "react";

import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

export default function FooterIcons() {
  return (
    <div>
      <img src={facebook} alt="media" height="50px" />
      <img src={instagram} alt="media" height="50px" />
      <img src={twitter} alt="media" height="50px" />
      <img src={youtube} alt="media" height="50px" />
    </div>
  );
}
