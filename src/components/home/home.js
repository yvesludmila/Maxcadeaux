import React from "react";
import Layout from "../layout/Layout";

function Home() {
  return (<>
    <Layout subTitle="" pageTitle="">
      <div className="container px-3 mx-auto -pt-[50px]">
        <div>
          <div>
            {/* <div className="absolute inset-0 top-[80px]  hidden lg:block z-1">
                <div className="relative w-full h-full">
                  <img
                    className="absolute top-[30px]  -right-[0px] h-70 w-70 text-primary-600"
                    src="./images/acc/cote2.png"
                    alt=""
                  />
                  <img
                    className="absolute top-[30px] -left-[0px] h-70 w-70 text-primary-600"
                    src="./images/acc/cote1.png"
                    alt=""
                  />
                  <img
                    className="absolute top-[600px] -left-[0px]  text-primary-600"
                    src="./images/acc/cote3.png"
                    alt=""
                  />
                  <img
                    className="absolute top-[1050px] -right-[0px]  text-primary-600"
                    src="./images/acc/cote3.png"
                    alt=""
                  />
                  <img
                    className="absolute top-[1285px] -left-[0px]  text-primary-600"
                    src="./images/acc/bat.png"
                    alt=""
                  />
                  <img
                    className="absolute top-[1375px] -right-[0px]  text-primary-600"
                    src="images/cote2.png"
                    alt=""
                  />
                </div>
              </div> */}
            <div className="grid grid-cols-12 gap-y-5 ">
              <div className="col-span-12">
                <div className="pt-8 sm:pt-10 lg:pt-16">
                  <div className="flex flex-col items-center space-y-3 md:space-y-4 lg:space-y-5">
                    <div className="text-center">
                      <span className="text-4xl sm:text-5xl text-blue-900 font-bold">
                        Gagner de l'argent en ligne
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-2xl text-black">
                        Jusqu'à 30{" "}
                        <i className="fa fa-coins text-yellow-500 "></i> par jour
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-semibold text-2xl text-blue-900">
                        Encaissez instantanément dans Mobile Refill, Crypto,
                        Gift Cards Paypal &amp; More
                      </span>
                    </div>
                    <div>
                      <div className="grid grid-cols-12 gap-4 pt-8">
                        <div
                          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                          <div className="block w-full">
                            <div
                              className="bg-white  border-1 border-yellow-400 rounded-xl shadow-sm overflow-hidden">
                              <div
                                className="flex items-center justify-center text-center px-4 min-h-[100px]">
                                <div>
                                  <span
                                    className="font-semibold text-2xl text-black">
                                    Recharge mobile
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                          <div className="block w-full">
                            <div
                              className="bg-white  border-1 border-yellow-400 rounded-xl shadow-sm overflow-hidden">
                              <div
                                className="flex items-center justify-center space-x-3 text-center px-4 min-h-[100px]">
                                <div>
                                  <div
                                    className="flex items-center justify-center rounded-md border-2 border-[#0168fa] h-6 w-6">
                                    <span
                                      className="text-sm font-semibold text-[#0168fa]">
                                      FP
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <span
                                    className="font-semibold text-2xl text-black">
                                    FaucetPay.io
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                          <div className="block w-full">
                            <div
                              className="bg-white  border-1 border-yellow-400 rounded-xl shadow-sm overflow-hidden">
                              <div
                                className="flex items-center justify-center text-center px-4 min-h-[92px]">
                                <img
                                  className="h-full"
                                  src="/images/cashouts/google-play.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                          <div className="block w-full">
                            <div
                              className="bg-white  border-1 border-yellow-400 rounded-xl shadow-sm overflow-hidden">
                              <div
                                className="flex items-center justify-center text-center px-4 min-h-[92px]">
                                <img
                                  className="h-full"
                                  src="/images/cashouts/paypal.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                          <div className="block w-full">
                            <div
                              className="bg-white  border-1 border-yellow-400 rounded-xl shadow-sm overflow-hidden">
                              <div
                                className="flex items-center justify-center text-center px-4 min-h-[92px]">
                                <img
                                  className="h-full"
                                  src="/images/cashouts/amazon.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                          <div className="block w-full">
                            <div
                              className="bg-white  border-1 border-yellow-400 rounded-xl shadow-sm overflow-hidden">
                              <div
                                className="flex items-center justify-center text-center px-4 min-h-[92px]">
                                <img
                                  className="h-full"
                                  src="/images/cashouts/pubg-mobile.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                          <div className="block w-full">
                            <div
                              className="bg-white  border-1 border-yellow-400 rounded-xl shadow-sm overflow-hidden">
                              <div
                                className="flex items-center justify-center text-center px-4 min-h-[92px]">
                                <img
                                  className="h-full"
                                  src="/images/cashouts/paysera.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                          <div className="block w-full">
                            <div
                              className="bg-white  border-1 border-yellow-400 rounded-xl shadow-sm overflow-hidden">
                              <div
                                className="flex items-center justify-center text-center px-4 min-h-[92px]">
                                <img
                                  className="h-full"
                                  src="/images/cashouts/free-fire.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12">
                          <div className="text-center">
                            <span className="text-black font-light text-2xl">
                              +20 more cashout options
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 ">
                <div className="pt-4 sm:pt-5 lg:pt-8">
                  <div className="grid grid-cols-12 gap-5 lg:max-w-4xl mx-auto">
                    <div className="col-span-8 md:col-span-4 text-black xs:w-[93vw]  ">
                      <div
                        className="border-1 border-yellow-500/100 rounded-xl px-2 lg:px-4 py-4">
                        <div className="text-center">
                          <span className="font-semibold text-2xl">
                            0h 15m 14s
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="text-sm">
                            Average time until first cashout
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-8 md:col-span-4 text-black xs:w-[93vw]  ">
                      <div
                        className="border-1 border-yellow-500/100 rounded-xl px-2 lg:px-4 py-4">
                        <div className="text-center">
                          <span className="font-semibold text-2xl">
                            $12.52
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="text-sm">
                            Average user earnings yesterday
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-8 md:col-span-4 text-black xs:w-[93vw]  ">
                      <div
                        className="border-1 border-yellow-500/100 rounded-xl px-2 lg:px-4 py-4">
                        <div className="text-center">
                          <span className="font-semibold text-2xl">
                            $128.5k
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="text-sm">
                            Total USD earned by users
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[100px]">
                <div className="pt-8 sm:pt-10 lg:pt-10">
                  <div className="flex flex-col items-center space-y-3 md:space-y-4 lg:space-y-5">
                    <div>
                      <div className="text-center">
                        <span className="text-4xl sm:text-5xl font-bold text-indigo-500">
                          Get Started
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="text-xl text-black">
                          Earning money on Earnator has been made as simple as possible
                        </span>
                      </div>
                    </div>
                    <div className="w-full max-w-xl">
                      <div className="grid grid-cols-12 gap-y-5 w-full">
                        <div className="col-span-12">
                          <div
                            className="flex items-center text-black border-1 border-yellow-500/100 rounded-xl py-5 px-6 space-x-4">
                            <div className="shrink-0">
                              <div
                                className="flex items-center justify-center bg-yellow-300 h-10 w-10 rounded-full">
                                <span
                                  className="font-bold  text-indigo-500 text-xl">
                                  1
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col grow -space-y-0.5">
                              <div className="leading-none">
                                <span className="font-bold text-2xl">
                                  Choose
                                </span>
                              </div>
                              <div className="leading-none">
                                <span className="text-lg">
                                  Choose from any of our thousands of offers
                                </span>
                              </div>
                            </div>
                            <div className="shrink-0 hidden sm:block">
                              <div
                                className="flex items-center justify-center bg-primary-100 text-indigo-500 h-14 w-14 rounded-xl">
                                <svg
                                  className="h-8 w-8"
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="48"
                                    height="48"
                                    fill="white"
                                    fillOpacity="0.01"
                                  />
                                  <path
                                    d="M34 10L42 18"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M42 10L34 18"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M44 30L37 38L33 34"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <rect
                                    x="4"
                                    y="10"
                                    width="22"
                                    height="8"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <rect
                                    x="4"
                                    y="30"
                                    width="22"
                                    height="8"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12">
                          <div
                            className="flex items-center text-black border-1 border-yellow-500/100 rounded-xl py-5 px-6 space-x-4">
                            <div className="shrink-0">
                              <div
                                className="flex items-center justify-center bg-yellow-300 h-10 w-10 rounded-full">
                                <span
                                  className="font-bold  text-indigo-500 text-xl">
                                  2
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col grow -space-y-0.5">
                              <div className="leading-none">
                                <span className="font-semibold text-2xl">
                                  Complete
                                </span>
                              </div>
                              <div className="leading-none">
                                <span className="text-lg">
                                  Read the description and then complete the offer
                                </span>
                              </div>
                            </div>
                            <div className="shrink-0 hidden sm:block">
                              <div
                                className="flex items-center justify-center bg-primary-100 text-indigo-500 h-14 w-14 rounded-xl">
                                <svg
                                  className="h-8 w-8"
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#icon-6043b30d4818cf0)">
                                    <path
                                      d="M42 20V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H30"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16 20L26 28L41 7"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="icon-6043b30d4818cf0">
                                      <rect
                                        width="48"
                                        height="48"
                                        fill="currentColor"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12">
                          <div
                            className="flex items-center text-black border-1 border-yellow-500/100 rounded-xl py-5 px-6 space-x-4">
                            <div className="shrink-0">
                              <div
                                className="flex items-center justify-center bg-yellow-300 h-10 w-10 rounded-full">
                                <span className="font-bold text-indigo-500 text-xl">
                                  3
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col grow -space-y-0.5">
                              <div className="leading-none">
                                <span className="font-semibold text-2xl">
                                  Cashout
                                </span>
                              </div>
                              <div className="leading-none">
                                <span className="text-lg">
                                  Select from over 16+ cashout options
                                </span>
                              </div>
                            </div>
                            <div className="shrink-0 hidden sm:block">
                              <div
                                className="flex items-center justify-center bg-primary-100 text-indigo-500 h-14 w-14 rounded-xl">
                                <svg
                                  className="h-8 w-8"
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="48"
                                    height="48"
                                    fill="white"
                                    fillOpacity="0.01"
                                  />
                                  <path
                                    d="M23.9917 6L6 6L6 42H24"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M33 33L42 24L33 15"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16 23.9917H42"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-span-12">
                  <div className="pt-8 sm:pt-10 lg:pt-16 pb-8 sm:pb-10 lg:pb-16">
                    <div className="flex flex-col items-center space-y-3 md:space-y-4 lg:space-y-5">
                      <div>
                        <div className="text-center">
                          <span className="text-3xl text-indigo-500 sm:text-4xl font-bold">
                            Why Earnator it better?
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="text-xl text-black">
                            Here are just a few reasons why Earnator the #1
                            website to make money online
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-5  lg:max-w-5xl mx-auto">
                        <div className="col-span-8 md:col-span-4 text-black xs:w-[93vw]  ">
                          <div className="border-1 border-yellow-500/100 rounded-xl px-2 lg:px-4 py-3 lg:py-5">
                            <div className="flex items-center justify-center mb-4">
                              <span className="text-indigo-600">
                                <svg
                                  className="h-8 w-8"
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="48"
                                    height="48"
                                    fill="white"
                                    fillOpacity="0.01"
                                  />
                                  <ellipse
                                    cx="14"
                                    cy="10"
                                    rx="10"
                                    ry="5"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M4 10C4 10 4 14.2386 4 17C4 19.7614 8.47715 22 14 22C19.5228 22 24 19.7614 24 17C24 15.3644 24 10 24 10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M4 17C4 17 4 21.2386 4 24C4 26.7614 8.47715 29 14 29C19.5228 29 24 26.7614 24 24C24 22.3644 24 17 24 17"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M4 24C4 24 4 28.2386 4 31C4 33.7614 8.47715 36 14 36C19.5228 36 24 33.7614 24 31C24 29.3644 24 24 24 24"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M4 31C4 31 4 35.2386 4 38C4 40.7614 8.47715 43 14 43C19.5228 43 24 40.7614 24 38C24 36.3644 24 31 24 31"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <ellipse
                                    cx="34"
                                    cy="24"
                                    rx="10"
                                    ry="5"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M24 24C24 24 24 28.2386 24 31C24 33.7614 28.4772 36 34 36C39.5228 36 44 33.7614 44 31C44 29.3644 44 24 44 24"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M24 31C24 31 24 35.2386 24 38C24 40.7614 28.4772 43 34 43C39.5228 43 44 40.7614 44 38C44 36.3644 44 31 44 31"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>{" "}
                              </span>
                            </div>
                            <div className="text-center">
                              <span className="text-black font-semibold text-xl">
                                Highest payouts
                              </span>
                            </div>
                            <div className="text-center">
                              <span className="text-sm text-black">
                                Industry leading payouts
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-8 md:col-span-4 text-black xs:w-[93vw]  ">
                          <div className="border-1 border-yellow-500/100 rounded-xl px-2 lg:px-4 py-3 lg:py-5">
                            <div className="flex items-center justify-center mb-4">
                              <span className="text-indigo-600">
                                <svg
                                  className="h-8 w-8"
                                  viewBox="0 0 48 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="48"
                                    height="48"
                                    fill="white"
                                    fillOpacity="0.01"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.9821 11.9689L31.7847 4L36.3971 11.9889L17.9821 11.9689Z"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V42C44 43.1046 43.1046 44 42 44H6C4.89543 44 4 43.1046 4 42V14Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M35.25 33H44V23H35.25C32.3505 23 30 25.2386 30 28C30 30.7614 32.3505 33 35.25 33Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M44 16.5V40.5"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                  />
                                </svg>{" "}
                              </span>
                            </div>
                            <div className="text-center">
                              <span className="text-black font-semibold text-xl">
                                Instant cash outs
                              </span>
                            </div>
                            <div className="text-center">
                              <span className="text-sm text-black">
                                Cash out in minutes, not days
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-8 md:col-span-4 text-black xs:w-[93vw]  ">
                          <div className="border-1 border-yellow-500/100 rounded-xl px-2 lg:px-4 py-3 lg:py-5">
                            <div className="flex items-center justify-center mb-4">
                              <span className="text-indigo-600">
                                <svg
                                  className="h-8 w-8"
                                  viewBox="0 0 48 48"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g>
                                    <rect
                                      width="48"
                                      height="48"
                                      fill="white"
                                      fillOpacity="0.01"
                                      strokeLinejoin="round"
                                      strokeWidth="4"
                                      stroke="none"
                                      fill-rule="evenodd"
                                    />
                                    <g transform="translate(4.000000, 4.000000)">
                                      <path
                                        d="M20,26 C26.627417,26 32,20.4693999 32,13.6470588 L32,0 L8,0 L8,13.6470588 C8,20.4693999 13.372583,26 20,26 Z"
                                        fill="none"
                                        fill-rule="nonzero"
                                        strokeLinejoin="round"
                                        strokeWidth="4"
                                        stroke="currentColor"
                                      />
                                      <path
                                        d="M8,17 L8,7 L0,7 C0,13.6666667 4,17 8,17 Z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="4"
                                        stroke="currentColor"
                                        fill="none"
                                        fill-rule="evenodd"
                                      />
                                      <path
                                        d="M32,17 L32,7 L40,7 C40,13.6666667 36,17 32,17 Z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="4"
                                        stroke="currentColor"
                                        fill="none"
                                        fill-rule="evenodd"
                                      />
                                      <path
                                        d="M20,28 L20,32"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="4"
                                        stroke="currentColor"
                                        fill="none"
                                        fill-rule="evenodd"
                                      />
                                      <polygon
                                        fill="none"
                                        fill-rule="nonzero"
                                        points="11 38 14.690036 32 25.0425158 32 29 38"
                                        strokeLinejoin="round"
                                        strokeWidth="4"
                                        stroke="currentColor"
                                      />
                                    </g>
                                  </g>
                                </svg>{" "}
                              </span>
                            </div>
                            <div className="text-center">
                              <span className="text-black font-semibold text-xl">
                                Monthly leaderboard
                              </span>
                            </div>
                            <div className="text-center">
                              <span className="text-sm text-black">
                                Climb the ranks &amp; cash in monthly
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>);
}

export default Home;
