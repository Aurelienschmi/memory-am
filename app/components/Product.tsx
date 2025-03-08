import React from 'react';
import Image from 'next/image';
import '../styles/Product.css';

const productsData = [
  {
    id: 1,
    name: 'Brassière Instinct',
    price: 80,
    image: 'https://picsum.photos/500/500?random=1',
  },
  {
    id: 2,
    name: 'Pantalon de Yoga',
    price: 65,
    image: 'https://picsum.photos/500/500?random=2',
  },
  {
    id: 3,
    name: 'T-shirt Sportif',
    price: 45,
    image: 'https://picsum.photos/500/500?random=3',
  },
  {
    id: 4,
    name: 'Chaussures de Course',
    price: 120,
    image: 'https://picsum.photos/500/500?random=4',
  },
  {
    id: 5,
    name: 'Sac de Sport',
    price: 50,
    image: 'https://picsum.photos/500/500?random=5',
  },
  {
    id: 6,
    name: 'Veste de Running',
    price: 90,
    image: 'https://picsum.photos/500/500?random=6',
  },
  {
    id: 7,
    name: 'Short de Sport',
    price: 35,
    image: 'https://picsum.photos/500/500?random=7',
  },
  {
    id: 8,
    name: 'Montre Connectée',
    price: 150,
    image: 'https://picsum.photos/500/500?random=8',
  },
  {
    id: 9,
    name: 'Bouteille d\'Eau',
    price: 20,
    image: 'https://picsum.photos/500/500?random=9',
  },
  {
    id: 10,
    name: 'Casquette de Sport',
    price: 25,
    image: 'https://picsum.photos/500/500?random=10',
  },
];

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => (
  <div>
    <Image src={product.image} alt={product.name} className="product-image" width={500} height={500} />
    <h2 className="product-name">{product.name}</h2>
    <p className="product-price">{product.price} €</p>
  </div>
);

const ProductsPage = () => (
  <div>
    <div className="product-grid">
      {productsData.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductsPage;
