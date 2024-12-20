import React from "react";
import { Link } from "react-router-dom";

// Import assets
import CheveningLogoLight from "../assets/CheveningLogoLight.png";
import Facebook from "../assets/Facebook F.svg";
import Instagram from "../assets/Instagram Old.svg";
import TwitterX from "../assets/TwitterX_1.svg";
import YouTube from "../assets/YouTube.svg";
import Messenger from "../assets/FacebookMessenger_1.svg";

const Footer = () => {
  return (
    <footer className="w-full px-5 py-12 bg-[#0A142F] flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col items-center gap-6">
        <div className="w-full flex flex-col gap-6 items-center">
          {/* Logo */}
          <img
            src={CheveningLogoLight}
            alt="Logo"
            className="w-[300px] mb-4"
          />

          {/* Footer Content */}
          <div className="w-full flex flex-wrap justify-between items-start gap-6">
            {/* Learn More Section */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-2">
              <h5 className="text-white text-base font-medium">Learn More</h5>
              <Link
                to="/"
                className="text-white opacity-80 text-sm font-light hover:underline"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white opacity-80 text-sm font-light hover:underline"
              >
                About Us
              </Link>
              <Link
                to="/events"
                className="text-white opacity-80 text-sm font-light hover:underline"
              >
                Events
              </Link>
              <Link
                to="/blog"
                className="text-white opacity-80 text-sm font-light hover:underline"
              >
                News & Blog
              </Link>
              <Link
                to="/partner"
                className="text-white opacity-80 text-sm font-light hover:underline"
              >
                Partner with Us
              </Link>
            </div>

            {/* Services Section */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-2">
              <h5 className="text-white text-base font-medium">Services</h5>
              <Link
                to="services/policy-advisory"
                className="text-white opacity-80 text-sm font-light hover:underline"
              >
                Policy Advisory
              </Link>
              <Link
                to="services/community-engagement"
                className="text-white opacity-80 text-sm font-light hover:underline"
              >
                Community Engagement
              </Link>
              <Link
                to="services/professional-consultancy"
                className="text-white opacity-80 text-sm font-light hover:underline"
              >
                Professional Consultancy
              </Link>
            </div>

            {/* Contact Us Section */}
            <div className="flex-1 min-w-[250px] flex flex-col gap-2">
              <h5 className="text-white text-base font-medium">Contact Us</h5>
              <div className="flex items-center gap-2">
                <span className="text-white opacity-70 text-sm font-light">
                  Call Us:
                </span>
                <a
                  href="tel:+254726875221"
                  className="text-white text-sm font-medium hover:underline"
                >
                  +254 726 875221
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white opacity-70 text-sm font-light">
                  Email:
                </span>
                <a
                  href="mailto:administrator@cheveningkenya.org"
                  className="text-white text-sm font-medium hover:underline"
                >
                  administrator@cheveningkenya.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white opacity-70 text-sm font-light">
                  Address:
                </span>
                <span className="text-white text-sm font-medium">
                  P.O Box 62263 - 00200, Nairobi, Kenya
                </span>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-2">
              <h5 className="text-white text-base font-medium">Follow Us</h5>
              <div className="flex gap-4">
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="w-[18px] h-[18px] cursor-pointer"
                />
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-[18px] h-[18px] cursor-pointer"
                />
                <img
                  src={TwitterX}
                  alt="Twitter"
                  className="w-[18px] h-[18px] cursor-pointer"
                />
                <img
                  src={YouTube}
                  alt="YouTube"
                  className="w-[18px] h-[18px] cursor-pointer"
                />
                <img
                  src={Messenger}
                  alt="Messenger"
                  className="w-[18px] h-[18px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white opacity-15 mt-6"></div>

        {/* Copyright */}
        <p className="text-center text-white opacity-75 text-sm font-light mt-4">
          Copyright © 2024 Chevening Kenya Alumni Network | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
