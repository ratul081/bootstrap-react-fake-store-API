import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Products from '../Products/Products';

import Sorting from '../Sorting/Sorting';
import Graph from '../Graph/Graph';

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(data => {
        const productLoaded = data.data;
        setProducts(productLoaded);
      })
      return (()=>{
        console.log("Hlw")
      })
  }, [])


  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Sorting></Sorting>
      <Products
      products={products}
      ></Products>
      <Graph
      products={products}></Graph>
    </div>
  );
};

export default Home;