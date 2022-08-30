import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 text-xs rounded-lg shadow text-white">
      <p className="text-center">
        Get API From &nbsp;
        <a href="http://www.boredapi.com/" className="hover:underline">
          boredapi
        </a>
      </p>
      <span className="">
        © 2022{" "}
        <a href="https://github.com/menglycheng" className="hover:underline">
          MenglyCheng
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
