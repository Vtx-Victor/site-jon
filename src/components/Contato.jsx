import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "@/styles/Contato.module.css";

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Enviando...");

        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus("E-mail enviado com sucesso!");
            setFormData({ nome: "", email: "", mensagem: "" });
        } else {
            setStatus("Erro ao enviar o e-mail. Tente novamente.");
        }
    };

    return (
        <section className={styles.contatoContainer}>
            <h2 className={styles.titulo}>Vamos trabalhar juntos?</h2>
            <div className={styles.formularioContainer}>
                {/* Vídeo */}
                <div className={styles.videoContainer}>
                    <video autoPlay loop muted className={styles.video}>
                        <source src="/videos/sample.mp4" type="video/mp4" />
                        Seu navegador não suporta o vídeo.
                    </video>
                </div>

                {/* Formulário */}
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="mensagem"
                        placeholder="Mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send</button>
                    <p className={styles.status}>{status}</p>
                </form>
            </div>

            {/* Descrição */}
            <p className={styles.descricao}>
                Atendo agências e empresas globais com projetos únicos de design e publicidade, incluindo identidade visual,
                design de embalagens, criação de websites, matte painting, retouching, motions animados, edições de vídeos
                e muito mais.
            </p>
            <footer className={styles.rodape}>
                <Image
                    src="/img/logo top.png"
                    alt="logo-jon"
                    width={180}
                    height={39}
                />
                <div className={styles.socialIcons}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={styles.icon} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={styles.icon} />
                    </a>
                </div>
                <p>© 2024 Jonathan Akello</p>
            </footer>
        </section>
    );
};

export default Contato;
