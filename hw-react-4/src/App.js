
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  // Object for Card
  const items = [
    { id: 1, 
      name: 'Brushed Cotton Turtleneck Long-Sleeve T-Shirt', 
      sexSize: 'Unisex, XXS-3XL', 
      price: '24.90',
      img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/450179/sub/goods_450179_sub14.jpg?width=700',
      colors: ['white', 'black', 'beige', 'yellow', 'green'],
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']
    },
    { id: 2, 
      name: 'Brushed Cotton Crew Neck Long-Sleeve T-Shirt', 
      sexSize: 'Unisex, XXS-3XL', 
      price: '24.90',
      img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/450180/sub/goods_450180_sub14.jpg?width=700',
      colors: ['white', 'black', 'beige', 'yellow', 'green'],
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']
    },
    { id: 3, 
      name: 'Washed Cotton Crew Neck Long-Sleeve T-Shirt', 
      sexSize: 'Unisex, XXS-3XL', 
      price: '29.90',
      img: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/455406/sub/goods_455406_sub14.jpg?width=700',
      colors: ['white', 'black', 'beige', 'yellow', 'green'],
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']
    }
  ]

 

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="App"> 
        <Routes>
          <Route path='/' element = {<Main />}/>
          <Route path='/Items' element = {<Card items={items}/>} />
          <Route path='/Cart' element = {<Cart/>} />
        </Routes>    
      </div>
    </>
  );
}

export default App;
