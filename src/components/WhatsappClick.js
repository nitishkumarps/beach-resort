import React from "react";
import Whatsappimage from "../images/whatsapp.png";

export default function WhatsappClick() {
  return (
    <div className="whatsapp-click">
      <a
        href="https://wa.me/9632916893"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Whatsappimage} alt="whatsapp" />
      </a>
    </div>
  );
}
