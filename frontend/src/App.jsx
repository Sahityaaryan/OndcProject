import { useState } from 'react'
import Home from './components/Home';
import Header from './components/Header'
import ProductCreate from './components/ProductCreate'

import ModifyCategory from './components/ModifyCategory.jsx';
import './index.css'
function App() {

  return (
    <div >
      <ModifyCategory/>
      {/* <Header/>
      <Home /> */}
    </div>
  );
}

export default App

