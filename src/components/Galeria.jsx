import { useState } from "react";
import styles from "@/styles/Galeria.module.css";

const imagesData = [
  { id: 1, category: "identidade visual", src: "/img/ec89aec6-46b4-4d24-b8e3-feccd9f2615b.webp" },
  { id: 2, category: "design de embalagens", src: "/img/ec89aec6-46b4-4d24-b8e3-feccd9f2615b.webp" },
  { id: 3, category: "matte painting", src: "/img/ec89aec6-46b4-4d24-b8e3-feccd9f2615b.webp" },
  { id: 4, category: "landing page", src: "/img/ec89aec6-46b4-4d24-b8e3-feccd9f2615b.webp" },
  { id: 5, category: "motions", src: "/img/ec89aec6-46b4-4d24-b8e3-feccd9f2615b.webp" },
  { id: 6, category: "identidade visual", src: "/img/ec89aec6-46b4-4d24-b8e3-feccd9f2615b.webp" },
  { id: 7, category: "identidade visual", src: "/img/ec89aec6-46b4-4d24-b8e3-feccd9f2615b.webp" },
  { id: 8, category: "identidade visual", src: "/img/ec89aec6-46b4-4d24-b8e3-feccd9f2615b.webp" },
  { id: 9, category: "design de embalagens", src: "/img/ec89aec6-46b4-4d24-b8e3-feccd9f2615b.webp" },
  { id: 10, category: "matte painting", src: "/img/ec89aec6-46b4-4d24-b8e3-feccd9f2615b.webp" },
];

const categories = [
  "todos",
  "identidade visual",
  "design de embalagens",
  "matte painting",
  "landing page",
  "motions",
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [showAllImages, setShowAllImages] = useState(false);

  const filteredImages =
    selectedCategory === "todos"
      ? imagesData
      : imagesData.filter((img) => img.category === selectedCategory);

  const imagesToShow = showAllImages ? filteredImages : filteredImages.slice(0, 8);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.filterButtons}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.button} ${selectedCategory === category ? styles.active : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      {/* Utiliza a propriedade key para forçar re-mount e disparar a animação */}
      <div
        key={showAllImages ? "all" : "partial"}
        className={`${styles.imageGrid} ${showAllImages ? styles.animateContainer : ""}`}
      >
        {imagesToShow.map((image) => (
          <div key={image.id} className={styles.imageCard}>
            <img src={image.src} alt={`Imagem ${image.id}`} />
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowAllImages(!showAllImages)}
        className={styles.viewMoreButton}
      >
        {showAllImages ? "Ver menos" : "Ver mais"}
      </button>
    </div>
  );
}
