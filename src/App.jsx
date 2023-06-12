import React from 'react';
import Directory from './components/directory/Directory';
import {categories} from './data/data';
import './App.css';




const App = () => {
  return (
    <div className='container'>
     <Directory categories={categories}/>
    </div>
  )
}

export default App