import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import Header from './components/Header';
import Product from './components/Product';
import Basket from './components/Basket';

import mockData from './mockData';

function ProductPage(props) {
  console.log(props); // eslint-disable-line no-console
  return (
    <>
      <Header />
      <div className="page">
        <Product />
        <Basket />
      </div>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<ProductPage product={mockData} />, rootElement);
