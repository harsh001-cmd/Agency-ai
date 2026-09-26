import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
  return (
    <footer className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-16 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">

      {/* Footer Top */}
      <div className="flex justify-between gap-10 max-lg:flex-col">

        {/* Logo & Description */}
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">

          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt="Logo"
          />

          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          {/* Navigation Links */}
          <ul className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
            <li>
              <a
                className="hover:text-primary transition"
                href="#hero"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="hover:text-primary transition"
                href="#services"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="hover:text-primary transition"
                href="#our-work"
              >
                Our Work
              </a>
            </li>

            <li>
              <a
                className="hover:text-primary transition"
                href="#contact-us"
              >
                Contact Us
              </a>
            </li>
          </ul>

        </div>


        {/* Newsletter */}
        <div className="text-gray-600 dark:text-gray-400 max-w-md">

          <h3 className="font-semibold">
            Subscribe to our newsletter
          </h3>

          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox
            weekly.
          </p>

          <div className="flex gap-2">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 text-sm outline-none rounded border border-gray-200 dark:border-gray-500 bg-transparent dark:text-gray-200"
            />

            <button className="bg-primary text-white rounded px-6 hover:opacity-90 transition">
              Subscribe
            </button>

          </div>

        </div>

      </div>


      {/* Divider */}
      <hr className="border-gray-300 dark:border-gray-600 my-8" />


      {/* Footer Bottom */}
      <div className="flex justify-between items-center gap-5 pb-8 max-sm:flex-col">

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Copyright 2026 Greatstack - All Rights Reserved.
        </p>


        {/* Social Icons */}
        <div className="flex items-center gap-4">

          <img
            src={assets.facebook_icon}
            className="w-5 cursor-pointer hover:opacity-70 transition"
            alt="Facebook"
          />

          <img
            src={assets.twitter_icon}
            className="w-5 cursor-pointer hover:opacity-70 transition"
            alt="Twitter"
          />

          <img
            src={assets.linkedin_icon}
            className="w-5 cursor-pointer hover:opacity-70 transition"
            alt="Twitter"
          />

          <img
            src={assets.instagram_icon}
            className="w-5 cursor-pointer hover:opacity-70 transition"
            alt="Twitter"
          />

        </div>

      </div>

    </footer>
  )
}

export default Footer