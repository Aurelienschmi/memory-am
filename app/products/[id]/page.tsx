"use client";

import React from "react";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import Navbar from "../../components/Navbar"; 
import productsData from "../../data/products";
import "../../styles/InfoProduct.css";

const ProductDetails = () => {
  const { id } = useParams();

  const product = productsData.find((p) => p.id === parseInt(id as string));

  if (!product) {
    notFound();
  }

  return (
    <div>
      <Navbar />

      <div className="product-details">
        <div className="product-details-image">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
          />
        </div>

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
          <div className="product-size-options">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <div
                key={size}
                className={`size-option ${size === "M" ? "selected" : ""}`}
              >
                {size}
              </div>
            ))}
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
            <div className="list-item">
              <span>Livraison</span>
              <span className="arrow">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
