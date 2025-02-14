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
            Empresário e designer gráfico há mais de 12 anos. Durante sua trajetória desenvolveu 
            uma metodologia única em que já mais de 1000 alunos despertaram a sua criatividade. 
            Além disso, ajudou mais de 300 empresas de design a se posicionarem melhor no mercado, 
            tornando-se referência na área. Seus conhecimentos já alcançaram alunos em mais de 
            30 países. Além de trabalhar como Designer no Brasil, ele tem uma forte atuação no 
            mercado internacional.
          </p>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
};

export default SobreMim;

