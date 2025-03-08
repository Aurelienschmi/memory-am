import React from 'react';
import Navbar from './components/Navbar';
import ProductsPage from './components/Product';
import './styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1 className='title'>Collection été</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit repellat quo dolores earum. Dignissimos saepe maxime asperiores explicabo quo praesentium velit in labore. Aliquid accusantium totam dignissimos, doloremque deserunt sequi!</p>
        <ProductsPage />
      </main>
    </div>
  );
};

export default HomePage;