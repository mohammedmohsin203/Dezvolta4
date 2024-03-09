import React from "react";
import styles from "./Video.module.scss";
import AnimatedCursor from "react-animated-cursor";

const Video = () => {
  return (
    <main className="w-full h-screen relative ">
      <div>
        <div className={styles.main}>
          <iframe
            src="https://player.vimeo.com/video/830585507?h=0884345419&autoplay=1&loop=1&muted=1"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            className={styles.iframe}
          ></iframe>
          {/* <AnimatedCursor
            innerSize={10}
            outerSize={100}
            color="252, 173, 21"
            outerAlpha={1}
            innerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            id={styles.cursor}
          >
            <h1 className=" uppercase text-2xl font-bold">Play</h1>
          </AnimatedCursor> */}
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </main>
  );
};

export default Video;
