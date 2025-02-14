import ScrollReveal from "@/hooks/ScrollReveal";
import styles from "@/styles/SobreMim.module.css";
import Image from "next/image";

const SobreMim = () => {
  return (
    <ScrollReveal>
      <section className={styles.sobreMimContainer}>
        <div className={styles.conteudo}>
          <div className={styles.imagemContainer}>
            <h2 className={styles.titulo}>Meu caminho até aqui...</h2>
            <Image
              src="/img/PERFIL.png"
              alt="Foto de perfil"
              width={350}
              height={450}
              className={styles.imagem}
            />
          </div>
          <div className={styles.textoContainer}>
            <p className={styles.descricao}>
              Criatividade não tem botão de liga e desliga—e eu sou a prova viva
              disso. Há mais de 10 anos, mergulho no audiovisual explorando
              design, edição, motion e captação de imagens para transformar
              ideias em visuais que prendem, emocionam e, às vezes, até fazem
              alguém soltar um "uau". Mas criatividade não se alimenta só de
              pixels e deadlines. Por isso, equilibro minha vida digital com
              viagens, esportes e boas conversas. Afinal, um criador que só vive
              na frente da tela acaba criando sempre a mesma coisa. Meu
              combustível vem das histórias que ouço, das experiências que
              coleciono e da busca constante por algo novo. No fim, minha missão
              é simples: fazer cada projeto ter alma, impacto e um visual que
              fica na memória. Se é pra criar, que seja direito. E se for pra
              inovar, melhor ainda.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default SobreMim;
