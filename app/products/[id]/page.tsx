"use client";

import React from "react";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import Navbar from "../../components/Navbar"; // Import du composant Navbar
import productsData from "../../data/products";
import "../../styles/InfoProduct.css";

const ProductDetails = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL

  // Trouver le produit correspondant à l'ID
  const product = productsData.find((p) => p.id === parseInt(id as string));

  if (!product) {
    notFound(); // Affiche une page 404 si le produit n'existe pas
  }

  return (
    <div>
      {/* Navbar en haut de la page */}
      <Navbar />

      {/* Contenu principal */}
      <div className="product-details">
        {/* Image principale à gauche */}
        <div className="product-details-image">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Informations du produit à droite */}
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <p className="product-price">€{product.price}</p>
          <div className="product-thumbnail">
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              objectFit="cover"
            />
          </div>
          <div className="product-size-container">
            <div className="product-size">Taille : normal</div>
            <span className="product-size-guide">Guide des tailles</span>
          </div>
          <button className="add-to-cart">Ajouter au panier</button>
          <div className="product-details-extra">
            <div className="extra-item">
              <p>ARTISANAT</p>
              <strong>SAVOIR FAIRE</strong>
            </div>
            <div className="separator">|</div>
            <div className="extra-item">
              <p>EXIGENCE</p>
              <strong>CREATIONS</strong>
            </div>
            <div className="separator">|</div>
            <div className="extra-item">
              <p>HISTOIRE</p>
              <strong>EMOTIONS</strong>
            </div>
          </div>
          {/* Nouvelle section pour la liste */}
          <div className="product-details-list">
            <div className="list-item">
              <span>Description</span>
              <span className="arrow">›</span>
            </div>
            <div className="list-item">
              <span>Détails produit</span>
              <span className="arrow">›</span>
            </div>
            <div className="list-item">
              <span>Conseils d&apos;entretien</span>
              <span className="arrow">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
