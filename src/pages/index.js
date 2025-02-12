import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import Galeria from "@/components/Galeria";
import Typewriter from "@/components/Typewriter";
import GaleriaVideos from "@/components/GaleriaVideos";
import VideosDestaque from "@/components/VideosDestaques";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.heading}>
              <span className={styles.gradientText}>A magia do</span>
              <span className={styles.gradientText}>design em</span>
              <span className={styles.gradientText}>cada detalhe.</span>
            </h1>
            <p className={`${styles.subtitle} ${styles.animated}`}>
              Deixe-me mostrar como a magia do design pode elevar sua empresa para o próximo nível.
            </p>
            <button className={`${styles.button} ${styles.animated}`}>
              Despertar
            </button>
            <div className={styles.descriçao}>
              <p className={`${styles.description} ${styles.animated}`}>
                Atendo agências e empresas globais com projetos únicos de design e publicidade, incluindo
                identidade visual, design de embalagens, criação de websites, matte painting, retouching,
                motions animados, edições de vídeos e muito mais.
              </p>
            </div>
          </div>
        </div>
        <Galeria />
        <Typewriter />
        <div className={styles.containertiulo2}>
          <h1 className={styles.gradientTexttilulo2}>
            Destaque sua marca com motion designer
          </h1>
          <p className={styles.subtitle2}>
            Potencialize suas estratégias de vendas com nossas animações.
          </p>
        </div>
        <GaleriaVideos/>
        <div className={styles.containertiulo2}>
          <h1 className={styles.gradientTexttilulo2}>
            Se precisar de um editor de videos...
          </h1>
          <p className={styles.subtitle2}>
            Confira alguns dos projetos de captação e pos-produção já realizados
          </p>
        </div>
        <VideosDestaque/>
      </div>
    </>
  );
}
