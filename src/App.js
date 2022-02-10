import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fm1 from './fm1.png'
import Signup from './Components/Signup';

function App() {
 
  return (
    <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-5'>
            <Signup />
          </div>
          <div className='col-md-7'>
            <img className='img-fluid w-100' src={fm1} alt="" />
          </div>
        </div>
    </div>
  );
}

export default App;
