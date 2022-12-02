import {  useReducer,useState,useEffect } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./component/products";
import CountactUs from "./component/countactUs";
import AboutUs from "./component/aboutUs";
import CartShop from "./component/cartShop";
import productContext from "./context/GeneralContext";
import Login from "./component/login";
import ShowMore from "./component/showMore";
import axios from "axios";


const App = (props) => {

  const [products, setProducts] = useState([]);
  const [showState,setShowState] = useState([])

  
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    
    };
    useEffect(() => {
      fetchData();
    }, []);

  const reducer = (state, action) =>{
    
    switch (action.type) {
      case "ADD":
        const tempstate = state.filter((p) => action.payload.id === p.id);
      
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
        
      case "Increment":
       
       const Incrase = state.map((p) => {
        if (p.id === action.id) {
          return { ...p, quantity: p.quantity + 1 };
        } else {
          return p;
        }
      });
      return Incrase;
      case "Decrement":
   
       const Decrase = state.map((p) => {
        if (p.id === action.id) {
          return { ...p, quantity: p.quantity - 1 };
        } else {
          return p;
        }
      });
      return Decrase;

      case "Remove":
        const Remov = state.filter(p=>p.id !== action.id)
        return Remov;
      default:
        return state;
        }
      };

      const [state, dispatch] = useReducer(reducer, []);

      
      
      
      


  return (
    <productContext.Provider
      value={{
        state,dispatch,
        show:showState,
        products:products,
        onShow:handleShow,
      }}
    >
      {props.children}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/countactUs" element={<CountactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/cartShop" element={<CartShop />} />
          <Route path="/showMore" element={<ShowMore />} />
        </Route>
      </Routes>
    </productContext.Provider>
  );
  function handleShow(productId){
    const newShow = products.filter(p=> p.id===productId)
    setShowState(newShow)
};
}

export default App;
