"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import one from "../../../../public/choose-us1.jpg"
import two from "../../../../public/vision2.jpg"
import three from "../../../../public/mission1.jpg"
import onelogo from "../../../../public/dd3230c3-ec8d-494e-a4ac-9e3b2dbff6e3.svg"
import twologo from "../../../../public/21b39801-0468-4df8-90bf-a8d413edd29b.svg"
import threelogo from "../../../../public/813f1d2d-ec55-4eb3-b117-7b31b7d2b580.svg"

const TAB_DATA = [
  {
    title: "WHY CHOOSE US?",
    id: "skills",
    content: (
      <p>
        Casagrand Industrial & Warehousing offers a world-class infrastructure
        that’s future-forward, sustainable, and technology-integrated catering
        to diverse manufacturing and warehousing needs. We serve distinguished
        clients in diverse sectors such as Automotive, Engineering, E-Commerce
        and so on. Our best-in-class solutions are agile and scalable to meet
        the speed and precision expected. With the strength of the Casagrand -
        South India’s largest real estate developer behind us, we are confident
        of delivering excellence.
      </p>
    ),
    img: one
  },
  {
    title: "OUR VISION",
    id: "Education",
    content: (
      <p>
        Excellence in industrial real estate is defined by the sustained
        delivery of infrastructure in accordance with globally accepted
        standards of excellence.
      </p>
    ),img: two
  },
  {
    title: "OUR MISSION",
    id: "certifications",
    content: (
      <ul className="list-decimal pl-2">
        <li>20 million square feet in the next 5 years.</li>
        <li>
          To be an enterprise that prioritizes clients and delivers a seamless
          operational experience.
        </li>
      </ul>
    ),
    img: three
  },
];

const ChooseUs = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    // <section className="text-white border-none w-full h-full my-10 bg-black">
    //   <div className="flex flex-col relative justify-around ">
    //     <div className="flex flex-row relative w-full h-[35rem]">
          
    //         <h1 className="absolute top-[1rem] left-[15rem] text-8xl font-serif font-extralight z-[1] ">{TAB_DATA.find((t) => t.id === tab).title}</h1>
    //       <div className="flex flex-col absolute border-none   ">
            
    //       <div className="translate-x-[0rem] bg-[#ffb731a0] hover:bg-[#fcad15] ">

    //         <TabButton
    //           selecttab={() => handleTabChange("skills")}
    //           active={tab === "skills"}
    //         >
    //           {""}<Image src={onelogo} height={100} width={100} className="border-none scale-50 "  />{""}
    //         </TabButton>
    //         </div>
    //         <div className="= bg-[#ffb731a0] hover:bg-[#fcad15] ">
    //         <TabButton
    //           selecttab={() => handleTabChange("Education")}
    //           active={tab === "Education"}
              
    //         >
    //           {""}<Image src={twologo} height={100} width={100} className="scale-50 "/>{""}
    //         </TabButton>
    //         </div>
    //         <div className=" bg-[#ffb731a0] hover:bg-[#fcad15]  ">

    //         <TabButton
    //           selecttab={() => handleTabChange("certifications")}
    //           active={tab === "certifications"}
    //         >
    //           {""}<Image src={threelogo} height={100} width={100} className="scale-50"/>{""}
    //         </TabButton>
    //         </div>
    //       </div>
    //     <Image src={TAB_DATA.find((t) => t.id === tab).img} height={400} width={400} className="rounded-2xl relative" />
    //       </div>
    //       <div className=" absolute top-10 right-20 w-[40rem] h-[10rem] my-20 tracking-normal leading-8 text-xl text-gray-400">
    //         {TAB_DATA.find((t) => t.id === tab).content}
    //       </div>
    //   </div>
    // </section>
    <div>Hello</div>
  );
};

export default ChooseUs;
