import { useState } from 'react'
import Home from './components/Home';
import Header from './components/Header'
import { Outlet } from 'react-router-dom';

import './index.css'
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

