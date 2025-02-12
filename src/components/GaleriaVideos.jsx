// components/GaleriaVideos.js
import styles from "@/styles/GaleriaVideos.module.css";

const GaleriaVideos = () => {
  // Lista de vídeos (coloque os vídeos na pasta public)
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

  return (
    <div className={styles.gallery}>
      {videos.map((video, index) => (
        <div key={index} className={styles.videoContainer}>
          <video controls autoPlay loop muted className={styles.video}>
            <source src={video} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      ))}
    </div>
  );
};

export default GaleriaVideos;
