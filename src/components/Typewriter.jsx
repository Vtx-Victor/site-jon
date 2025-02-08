import { useState, useEffect } from 'react';
import styles from '@/styles/Typewriter.module.css';

const Typewriter = () => {
  // Array com as palavras que serão exibidas dinamicamente
  const words = ["visão", "solução", "transformação"];
  const prefix = "Designer é ";

  // Configurações de tempo (em milissegundos)
  const typingSpeed = 70;       // Velocidade de digitação
  const deletingSpeed = 70;     // Velocidade do apagamento
  const delayBetweenWords = 2000; // Pausa quando a palavra está completa

  // Estados para controlar a palavra atual, a posição do caractere e se está apagando
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Modo de digitação
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Palavra completa: aguarda antes de iniciar o apagamento
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      // Modo de apagamento
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // Palavra apagada: passa para a próxima
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <div className={styles.container}>
      <span>{prefix}</span>
      <span className={styles.typed}>{words[wordIndex].substring(0, charIndex)}</span>
      <span className={styles.cursor}>|</span>
    </div>
  );
};

export default Typewriter;
