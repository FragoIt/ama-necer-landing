import React from "react";

interface InstagramFloatProps {
  link: string;
}

const InstagramFloat: React.FC<InstagramFloatProps> = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-28 right-6 z-50 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full shadow-lg p-3 flex items-center justify-center hover:opacity-90 transition-opacity"
    aria-label="Instagram"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="white"
    >
      <path d="M16 8.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5zm0 12.2c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z"/>
      <path d="M21.1 6.9c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7-1.2-2.7-2.7-2.7z"/>
      <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13S23.2 3 16 3zm7.4 15.6c0 2.9-2.4 5.3-5.3 5.3H14c-2.9 0-5.3-2.4-5.3-5.3v-5.2C8.7 10.5 11.1 8 14 8h4.1c2.9 0 5.3 2.4 5.3 5.3v5.3z"/>
    </svg>
  </a>
);

export default InstagramFloat;