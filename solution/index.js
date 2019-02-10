import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import Header from './components/Header';
import Product from './components/Product';
import Basket from './components/Basket';

import mockData from './mockData';

class ProductPage extends React.Component {
  state = {
    cart: [],
    stock: this.props.product.stock, // set initial stock from product data passed in
  };

  addToCart = item =>
    this.setState(prevState => {
      const cart = prevState.cart.find(cartItem => cartItem.name === item.name)
        ? prevState.cart.map(cartItem =>
            item.name === cartItem.name
              ? { ...cartItem, qty: cartItem.qty + item.qty }
              : cartItem
          )
        : [...prevState.cart, item];
      return { cart, stock: prevState.stock - item.qty };
    });

  render() {
    const { stock, cart } = this.state;
    const { product } = this.props;
    return (
      <>
        <Header />
        <div className="page">
          <Product {...product} stock={stock} addToCart={this.addToCart} />
          <Basket items={cart} />
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<ProductPage product={mockData} />, rootElement);
