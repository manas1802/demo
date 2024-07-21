import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BasicTable } from './components/BasicTable';
import {Sortingtable} from './components/Sortingtable';
import {FilteringTable} from './components/FilteringTable'


function App(){
  return(
    <div className='App'>
      <FilteringTable/>
    </div>
  )
}


export default App;
