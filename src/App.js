
import { useState } from 'react';
import './App.css';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


function App() {
  const [cartItems,setCartItems] = useState([]);

  const addItemstoCart = (item)=> {
    setCartItems([...cartItems,item]);
  }
  const removeItemsfromCart= (item)=>{
    setCartItems(cartItems.filter((exItem)=>exItem!==item));
  }


  return (
    <div className="App">
     <Header cartCount={cartItems.length}/>
     <Content 
     addItemstoCart={addItemstoCart}
     removeItemsfromCart={removeItemsfromCart}
     />
     <Footer/>
    </div>
  );
}

export default App;
