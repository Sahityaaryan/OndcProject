import { useState } from 'react'
import Home from './components/Home';
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import { laptopProducts } from '../public/dummyData/page';
import './index.css'
import ProductCard from './components/ProductCard';
function App() {

  return (
    <div >
      {/* <ModifyCategory/> */}
      <Header/>
 
  <Outlet/>

 
    </div>
  );
}
export default App

