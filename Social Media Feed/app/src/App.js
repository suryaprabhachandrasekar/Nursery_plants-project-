import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
// import { Posts } from './components/Posts';
import { Newpost } from './components/Newpost';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Userpost } from './components/Userpost';
function App() {
  const [inp, setInp] = useState({
    fname: ''
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar val={inp}></Navbar><Home></Home></>}></Route>
          <Route path='/newpost' element={<><Navbar val={inp}></Navbar><Newpost ></Newpost></>}></Route>
          <Route path='/login' element={<><Navbar val={inp}></Navbar><Login fn={setInp}></Login></>}></Route>
          <Route path='/register' element={<><Navbar val={inp}></Navbar><Register></Register></>}></Route>
          <Route path='/userpost' element={<><Navbar val={inp}></Navbar><Userpost val={inp}></Userpost></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
