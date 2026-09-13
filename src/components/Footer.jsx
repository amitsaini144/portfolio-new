import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () =>{
    return(
        <footer className="border-t border-seam text-ash py-5 px-6 md:px-10 md:flex-row gap-3 md:gap-0 flex-col flex md:justify-between items-center w-full">
        <div>
          <p className="text-sm">Designed and developed by <span className="text-copper">Amit Saini</span></p>
        </div>
        <div>
          <p className="font-mono text-xs">© {new Date().getFullYear()} AS</p>
        </div>
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/amitsaini144"
            target="_blank"
            rel="noreferrer"
            className="hover:text-copper transition-colors"
            title="Github"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amitsaini144/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-copper transition-colors"
            title="Linkedin"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://leetcode.com/u/amitsaini144/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-copper transition-colors"
            title="LeetCode"
          >
            <SiLeetcode />
          </a>
        </div>
      </footer>
    );
}

export default Footer;
