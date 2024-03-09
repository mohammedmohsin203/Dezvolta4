"use client";

import Navbar from "./Components/Navbar/Navbar";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.scss";
import Carousel from "./Components/Carousel/Carousel";
import AboutSection from "./Components/AboutSection/AboutSection";
import Brands from "./Components/Brands/Brands";
import Description from "./Components/Description/Description";
import Video from "./Components/Video/Video";
import AnimatedCursor from "react-animated-cursor";
import CardHorizontal from "./Components/Carousel2/Carousel2";
import ChooseUs from "./Components/ChooseUs/ChooseUs";
import CardHorizontal2 from "./Components/Carousel3/CardHorizontal2";
import Footer from "./Components/Footer/Footer";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef();
  useGSAP((context) => {
    let mm = gsap.matchMedia();
    mm.add(() => {
      gsap.utils.toArray(".panel").forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
        });
      });
    });
  });
  return (
    <>
      <Navbar />
      <section className={styles.panel} class="panel">
        <Carousel />
      </section>
      <section className={styles.panel1} class="panel">
        <AboutSection />
        <Brands />
        <div>
          {" "}
          <Description />
        </div>

        <Video />
        <CardHorizontal />
        <ChooseUs />
        <CardHorizontal2 />
        <Footer />
      </section>
    </>
  );
}
