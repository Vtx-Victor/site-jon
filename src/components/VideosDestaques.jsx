// components/VideosDestaque.js
import styles from "@/styles/VideosDestaques.module.css";

const VideosDestaque = () => {
  // Lista de vídeos maiores
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
  ];

  return (
    <div className={styles.destaqueContainer}>
      {videos.map((video, index) => (
        <div key={index} className={styles.videoWrapper}>
          <video controls autoPlay loop muted className={styles.video}>
            <source src={video} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideosDestaque;
