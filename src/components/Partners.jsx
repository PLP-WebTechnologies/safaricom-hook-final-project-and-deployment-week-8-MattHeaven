import React from "react";

// Import all logos
import kncci from "../assets/kncci.png";
import bcc from "../assets/bcc.png";
import gcf from "../assets/gcf.png";
import chatham from "../assets/chatham.png";
import tiis from "../assets/tiis.png";
import ndc from "../assets/ndc.png";
import knhcr from "../assets/knhcr.png";
import theCommonwealthS from "../assets/theCommonwealthS.png";
import PoK from "../assets/PoK.png";
import BritishCouncil from "../assets/BritishCouncil.png";
import KBA from "../assets/KBA.png";
import NPs from "../assets/NPs.png";

const OurPartners = () => {
  const partners = [
    { src: kncci, alt: "KNCCI Logo", maxWidth: "150px" },
    { src: bcc, alt: "BCC Logo", maxWidth: "200px" },
    { src: gcf, alt: "GCF Logo", maxWidth: "150px" },
    { src: chatham, alt: "Chatham Logo", maxWidth: "220px" },
    { src: tiis, alt: "TIIS Logo", maxWidth: "200px" },
    { src: ndc, alt: "NDC Logo", maxWidth: "100px" },
    { src: knhcr, alt: "KNHCR Logo", maxWidth: "110px" },
    { src: theCommonwealthS, alt: "The Commonwealth Logo", maxWidth: "300px" },
    { src: PoK, alt: "PoK Logo", maxWidth: "200px" },
    { src: BritishCouncil, alt: "British Council Logo", maxWidth: "250px" },
    { src: KBA, alt: "KBA Logo", maxWidth: "150px" },
    { src: NPs, alt: "NPs Logo", maxWidth: "120px" },
  ];

  return (
    <section className="w-full px-5 py-8 border-t border-black flex flex-col items-center">
      <p className="text-center text-black text-4xl font-medium mb-8">Our Partners</p>
      <div className="w-full flex flex-wrap justify-center gap-4 bg-white">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            className="flex-1"
            style={{ maxWidth: partner.maxWidth }}
          />
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
