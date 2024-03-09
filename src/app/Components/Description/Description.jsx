"use client";

import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React from "react";
import styles from "./Description.module.scss";
import map from "../../../../public/map-img2.png";
import cloud1 from "../../../../public/cloud1.png";
import bg from "../../../../public/ORAGADAM-1024x574.jpg";
import cloud2 from "../../../../public/cloud2.png";
import cloud3 from "../../../../public/cloud3.png";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Map = () => {
  useGSAP((context) => {
    let mm = gsap.matchMedia();
      const animation = gsap.from(".photo", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        animation: animation,
        scrub: true,      });
  });

  const data = [
    {
      name: `CasaGrand Futura - Pegatron 2`,
      area: `7.35 acres`,
      size: `3.2L sqft`,
      industry: `Manufracturing`,
      img: `one`,
    },
    {
      name: `CasaGrand Olympus Industrial Park`,
      area: `32 acres`,
      size: `13L sqft`,
      industry: `Warehousing / Manufracturing`,
      img: `one`,
    },
    // {
    //   name: `CasaGrand ShinRai Industrial Park`,
    //   area: `37 acres`,
    //   size: `20L sqft`,
    //   industry: `Warehousing / Manufracturing`,
    //   img: `one`,
    // },
    // {
    //   name: `CasaGrand Azure Industrial Park`,
    //   area: `117 acres`,
    //   size: `50L sqft`,
    //   industry: `Warehousing / Manufracturing`,
    //   img: `one`,
    // },
    // {
    //   name: `CasaGrand FarGlory Industrial Park`,
    //   area: `7.35 acres`,
    //   size: `3.2L sqft`,
    //   industry: `Manufracturing`,
    //   img: `one`,
    // },
    // {
    //   name: `CasaGrand Falccon Industrial Park`,
    //   area: `7.35 acres`,
    //   size: `3.2L sqft`,
    //   industry: `Manufracturing`,
    //   img: `one`,
    // },
    // {
    //   name: `CasaGrand pheonix Industrial Park`,
    //   area: `7.35 acres`,
    //   size: `3.2L sqft`,
    //   industry: `Manufracturing`,
    //   img: `one`,
    // },
    // {
    //   name: `CasaGrand Quantum Industrial Park`,
    //   area: `7.35 acres`,
    //   size: `675,180L sqft`,
    //   industry: `Manufracturing`,
    //   img: `one`,
    // },
  ];
  return (
    <main
      className="text-white h-full w-full cursor-auto bg-black"
      id={styles.main}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Playfair+Display&display=swap"
        rel="stylesheet"
      ></link>

      <div id={styles.gallery} className="gallery">
        <div id={styles.right} className="right">
          <div id={styles.photos}>
            <div id={styles.photo} className="photo">
              <Image src={map} width={1000} height={1000} id={styles.img} />
            </div>
          </div>
        </div>
        <div id={styles.left}>
          <div id={styles.detailsWrapper}>
            <div id={styles.details}>
              {/* <div id={styles.headline red}></div> */}
              <h1 className=" text-[58.4627px] leading-[64.309px] uppercase font-500 text-left px-5 mt-10">
                GROW YOUR <br />
                WORLD IN <br />
                OURS
              </h1>
              <div>
                <form class="max-w-sm mx-auto my-4">
                  <select
                    id="countries"
                    class="bg-black border border-gray-300 text-xl font-['Archivo']  block w-full p-2.5 text-gray-400"
                  >
                    <option selected>Location</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
                <form class="max-w-sm mx-auto my-4">
                  <select
                    id="countries"
                    class="bg-black border border-gray-300 text-xl font-['Archivo']  block w-full p-2.5 text-gray-400"
                  >
                    <option selected>Required Space</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
                <form class="max-w-sm mx-auto my-4">
                  <select
                    id="countries"
                    class="bg-black border border-gray-300 text-xl font-['Archivo']  block w-full p-2.5 text-gray-400"
                  >
                    <option selected>Industry</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
              </div>
            </div>

            <div id={styles.details}>
              {/* <div id={styles.headline green}></div> */}
              {data.map((d) => (
                <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center scale-75">
                  <div
                    class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    title="Woman holding a mug"
                    id={styles.img1}
                  ></div>
                  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-2">
                      <div class="relative w-full shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                           {d.name}
                          </caption>

                          <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th
                                scope="row"
                                class="px-6  text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                Area
                              </th>
                              <td class="px-6 py-4 font-extrabold">
                                {d.area}
                              </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th
                                scope="row"
                                class="px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                Size
                              </th>
                              <td class="px-6 py-4 font-extrabold">
                                {d.size}
                              </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th
                                scope="row"
                                class="px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                Industry
                              </th>
                              <td class="px-6 py-4 font-extrabold text-sm">
                                {d.industry}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Map;
