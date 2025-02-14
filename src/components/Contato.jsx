// components/Contato.js
import { useState } from "react";
import Image from "next/image"; // Importando Next.js Image
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

      {/* Rodapé */}
      <footer className={styles.rodape}>
        <p>© 2024 Jonathan Akello</p>
      </footer>
    </section>
  );
};

export default Contato;
