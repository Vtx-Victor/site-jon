import { useState } from "react";
import styles from "@/styles/GaleriaVideos.module.css";
import ScrollReveal from "@/hook/ScrollReveal";

const GaleriaVideos = () => {
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
    "/videos/video5.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
    "/videos/video5.mp4",
  ];

  const [showAllVideos, setShowAllVideos] = useState(false);
  const videosToShow = showAllVideos ? videos : videos.slice(0, 4);

  return (
    <ScrollReveal>
      <div className={styles.container}>
        <div className={styles.gallery}>
          {videosToShow.map((video, index) => (
            <div key={index} className={styles.videoContainer}>
              <video controls autoPlay loop muted className={styles.video}>
                <source src={video} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowAllVideos(!showAllVideos)}
          className={styles.viewMoreButton}
        >
          {showAllVideos ? "Ver menos" : "Ver mais"}
        </button>
      </div>
    </ScrollReveal>
  );
};

export default GaleriaVideos;
