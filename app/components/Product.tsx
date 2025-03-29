import Link from 'next/link';
import Image from 'next/image';
import '../styles/Product.css';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => (
  <Link href={`/products/${product.id}`} className="product-card">
    <div className="product-image-container">
      <Image 
        src={product.image} 
        alt={product.name} 
        layout="fill" 
        objectFit="cover"
      />
    </div>
    <h2 className="product-name">{product.name}</h2>
    <p className="product-price">{product.price} €</p>
  </Link>
);

export default Product;