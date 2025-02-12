import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-5 mt-5 mx-auto bg-gray-900 dark:bg-gray-800 text-white">
      <footer>
        <div className="grid grid-cols-2">
          <div className="col-span-2 justify-center md:col-span-1">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <h2>Email: homework@gmail.com</h2>
            <h2>Phone: +8801384584</h2>
            <div>
              <h2 className="text-xl font-semibold mt-2">Media Links</h2>
              <div className="flex gap-3 ml-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare className="w-8 h-8 text-white hover:text-blue-600 transition-colors duration-300" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="w-8 h-8 text-white hover:text-red-600 transition-colors duration-300" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitterSquare className="w-8 h-8 text-white hover:text-blue-400 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
          <form className="col-span-2 md:col-span-1">
            <h6 className="text-xl font-semibold">Subscribe Us</h6>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div>
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered bg-gray-700 text-white"
                />
                <button className="btn btn-primary join-item mt-2">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
      <p className="text-center mt-2 font-semibold text-white">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
