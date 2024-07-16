// import logo from './logo.svg';
// import './App.css';
import RegForm from './components/registration';
import React from 'react';

function App() {
  return (
   <div className='app' >
  <div >
    <label>
Enter the username:
    </label>
<input type='text'></input>
<br>
</br>
  <div>
    <label>
    Enter the password:
    </label>
<input className='flex flex-col gap-4' type='text'></input>
</div>
  </div>
</div>
  
  );
}

export default App;
