import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-y-4 text-center md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase ">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytic</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase ">Support</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytic</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase ">Pricing</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytic</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase "> Documentation</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytic</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2 ">
          <p className="font-bold uppercase">Subscribe to NewsLetter</p>
          <p className="py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
            praesentium?
          </p>
          <form action="" className="flex flex-col sm:flex-row md:gap-x-2">
            <input className="w-full p-2 rounded mb-4" type="text" />
            <button className="p-2  mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] justify-between px-2 py-4 mx-auto   sm:flex-row text-center text-gray-500">
        <p className="my-4">2022, workflow, LLC. All rights reserved. </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitch />
          <FaTwitter />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
