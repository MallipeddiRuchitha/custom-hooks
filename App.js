import React from 'react';
import logo from './logo.svg';
import './App.css';
import DocTitleOne from '../src/components/Organisms/DocTitleOne';
import DocTitleTwo from "../src/components/Organisms/DocTitleTwo"
function App() {
  return (
    <div className="App">
     <DocTitleOne></DocTitleOne>
     <DocTitleTwo></DocTitleTwo>
    </div>
  );
}

export default App;
