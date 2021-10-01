import React , { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import Body from './Body';
import Contact from './Contact';
import Dropdown from './Dropdown';
import Main from './Main';
import Navbar from './Navbar';

function App() {
    
  const[isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  }

 useEffect(() => {
     const menuHide = () => {
         if(window.innerWidth > 768 && isOpen){
           setisOpen(false)
         }
     }
     window.addEventListener('resize', menuHide);
     return ()=> { 
       window.removeEventListener('resize', menuHide)
     };
 }, [isOpen]);
 

  return (
    <>
      <Navbar toggle={toggle}/> 
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch >
       <Route path='/' exact component={Main}/>
        <Route path='/body' component={Body}/>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
      
    </>
  );
}

export default App;
