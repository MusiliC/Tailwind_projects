import React from "react";
import {
  HiOutlinePhone,
  HiOutlineGlobeAlt,
  HiOutlineChip,
  HiOutlineArrowRight,
} from "react-icons/hi";

import supportImg from "../assets/hero.png";

export const Support = () => {
  return (
    <div className="w-full  mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt=""
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-slate-300 text-3xl uppercase text-center">
            Support
          </h2>
          <p className="text-5xl font-bold text-white text-center py-6">
            Find the right team
          </p>
          <p className="text-3xl  py-4 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut
            nam qui quasi ducimus exercitationem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-6 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-md shadow-2xl">
            <div className="p-8">
              <svg
                className="w-16 h-16 p-4 text-white   bg-indigo-600 rounded-lg mt-[-4rem]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>

              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                nesciunt minus necessitatibus in libero recusandae.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo">
                Contact us <HiOutlineArrowRight className="ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-2xl">
            <div className="p-8">
              <svg
                className="w-16 h-16 p-4 text-white   bg-indigo-600 rounded-lg mt-[-4rem]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>

              <h3 className="font-bold text-2xl my-6">Media Queries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                nesciunt minus necessitatibus in libero recusandae.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo">
                Contact us <HiOutlineArrowRight className="ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-2xl">
            <div className="p-8">
              <svg
                className="w-16 h-16 p-4 text-white   bg-indigo-600 rounded-lg mt-[-4rem]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>

              <h3 className="font-bold text-2xl my-6">Technical Support </h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                nesciunt minus necessitatibus in libero recusandae.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo">
                Contact us <HiOutlineArrowRight className="ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
