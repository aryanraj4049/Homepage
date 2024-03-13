import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer id="more" className="bg-gradient-to-b from-red-900 to-black text-white py-8">
      <div className="flex justify-center items-center mb-6">
        <a
          href="https://www.linkedin.com/in/aryanraj4049/"
          className="mr-4"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/aryanraj4049"
          className="mr-4"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a href="mailto:aryanr20@iitk.ac.in" className="mr-4">
          <HiOutlineMail size={30} />
        </a>
        <a
          href="https://www.instagram.com/aryanr20_/"
          className="mr-4"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
      <div className="text-center">
        <p className="text-sm">
          &copy; 2023-2024 &nbsp; कुछ तो लोग कहेंगे, लोगों का काम है कहना 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
