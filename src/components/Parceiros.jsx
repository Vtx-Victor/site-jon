import ScrollReveal from "@/hooks/ScrollReveal"
import styles from "@/styles/Parceiros.module.css"
import Image from "next/image"

export default function Parceiros() {

    return (
        <>
        <ScrollReveal>
            <div className={styles.conteiner}>
                <div className={styles.conteinerItens}>
                    <div className={styles.titulo}>
                    <h2>
                        Nossos valiosos Parceiros:
                    </h2>
                    </div>
                    <Image>

                    </Image>
                    <Image>

                    </Image>
                    <Image>

                    </Image>
                    <Image>

                    </Image>
                </div>
            </div>
            </ScrollReveal>
        </>
    )
}