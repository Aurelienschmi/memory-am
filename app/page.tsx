import React from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import productsData from './data/products';
import './styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1 className="title">Repetto x Swarovski – Quand la grâce rencontre l&apos;éclat</h1>
        <p>
          Repetto et Swarovski unissent leur savoir-faire pour donner naissance à une collection où la légèreté du ballet s&apos;illumine d&apos;un éclat cristallin. Entre tradition et modernité, chaque pièce incarne l&apos;élégance intemporelle de la danse sublimée par la brillance des cristaux Swarovski.
        </p>
        <div className="product-grid">
          {productsData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;