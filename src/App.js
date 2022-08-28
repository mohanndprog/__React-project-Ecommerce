import logo from './logo.svg';
import './App.css';
import Navs from './components/Navs/Navs';
 
import Home from './components/Home/Home';
import { Fragment } from 'react';
   

function App() {
  return (
    <Fragment>
        <Navs/>
      
        <Home/>
    </Fragment>
 
  );
}

export default App;
