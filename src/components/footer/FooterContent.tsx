import React from "react";

import footerLogo from "../../assets/footerlogo.png";

export default function FooterContent() {
  return (
    <div>
      <p>
        The content of this website is copyright protected and belongs to H & M
        Hennes & Mauritz AB. READ MORE
      </p>
      <img src={footerLogo} alt="hm logo" height="90rem" />
      <p>Finland | €</p>
    </div>
  );
}
