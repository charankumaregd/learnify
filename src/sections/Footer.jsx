import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const SocialIcons = {
  facebook: <FaFacebook size="1.2rem" />,
  linkedin: <FaLinkedin size="1.2rem" />,
  twitter: <FaTwitter size="1.2rem" />,
  youtube: <FaYoutube size="1.2rem" />,
  instagram: <FaInstagram size="1.2rem" />,
};

const Footer = () => {
  var year = new Date().getFullYear();

  return (
    <div className="w-full flex items-center justify-center">
      <footer className="px-2 md:px-16 py-10 max-md:max-w-md">
        <div className="flex flex-col gap-4 md:gap-8 items-center justify-between">
          <div className="flex gap-4">
            {Object.keys(SocialIcons).map((key) => (
              <a
                key={key}
                href={`https://${key}.com`}
                target="_blank"
                className="text-gray-500 hover:text-[#407BFF]"
              >
                {SocialIcons[key]}
              </a>
            ))}
          </div>
          <span className="text-sm">
            &copy; {year} Learnify Inc. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
