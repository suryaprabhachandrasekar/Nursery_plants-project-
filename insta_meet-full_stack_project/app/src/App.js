import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import { Home } from './components/Home';
import LoginPage from './components/LoginPage';
import CreateUserPage from './components/CreateUserPage';
import UserForm from './components/UserForm';
import StudentRegisterForm from './components/StudentRegisterForm';
import './components/common.css'
import { StaffPage } from './components/StaffPage';
import { StudentPage } from './components/StudentPage';
// import { Demo } from './components/Demo';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<><Navbar></Navbar><LoginPage></LoginPage><ContactSection></ContactSection></>}></Route>
          <Route path='/admin' element={<><Navbar></Navbar><CreateUserPage></CreateUserPage><ContactSection></ContactSection></>}></Route>
          <Route path='/studentform' element={<><StudentRegisterForm></StudentRegisterForm></>}></Route>
          <Route path='/staffform' element={<><Navbar></Navbar><UserForm></UserForm><ContactSection></ContactSection></>}></Route>
          <Route path='/staffpage' element={<><Navbar></Navbar> <StaffPage></StaffPage> <ContactSection></ContactSection></>}></Route>
          <Route path='/studentpage' element={<><Navbar></Navbar> <StudentPage></StudentPage> <ContactSection></ContactSection></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
