// components/Equipe.js
import ScrollReveal from "@/hooks/ScrollReveal";
import styles from "@/styles/Equipe.module.css";

const equipe = [
    {
        nome: "Jonathan Akello",
        cargo: "CEO",
        imagem: "/img/1 2.png"
    },
    {
        nome: "Jhonny Boy",
        cargo: "DIRETOR DE ARTE",
        imagem: "/img/2.png"
    },
    {
        nome: "Jonatovski",
        cargo: "REDATOR",
        imagem: "/img/3.png"
    },
    {
        nome: "Jonatástico",
        cargo: "VIDEOMAKER",
        imagem: "/img/4.png"
    },
    {
        nome: "Jonatudo",
        cargo: "ATENDIMENTO",
        imagem: "/img/5.png"
    },
];

const Equipe = () => {
    return (
        <ScrollReveal>
            <section className={styles.equipeSection}>
                <h2 className={styles.titulo}>Nossa maravilhosa equipe:</h2>
                <div className={styles.equipeContainer}>
                    {equipe.map((membro, index) => (
                        <div key={index} className={styles.card}>
                            <img src={membro.imagem} alt={membro.nome} className={styles.foto} />
                            <h3 className={styles.nome}>{membro.nome}</h3>
                            <p className={styles.cargo}>{membro.cargo}</p>
                        </div>
                    ))}
                </div>
            </section>
        </ScrollReveal>
    );
};

export default Equipe;
