
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'

function App() {
  const [gray, setgray] = useState('gray');
  const [white, setwhite] = useState('white');
  const [enable, setenable] = useState('enable');
  const graytoggle = () => {
    if (gray === 'gray-900') {

      setgray('white');
      setwhite('gray');


    }
    else {
      setgray('gray');
      setwhite('white');

    };
    if (white === 'white') {

      setgray('white');
      setwhite('gray');



    }
    else {
      setgray('gray');
      setwhite('white');

    };
    if (enable === 'enable') {
      setenable('disable');
    }
    else {
      setenable('enable');
    }
  }



  return (
    <>
      <Navbar title="Chage your text" gray={gray} white={white} graytoggle={graytoggle} enable={enable} />
      <TextArea heading="Enter your text here" /></>


  );
}

export default App;
