import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import SignInSide from './Components/login/Materiallogin';
import SignUp from './Components/registration/SignUp';
import Forgetpassword from './Components/forgetpassword/Forgetpassword';
import ButtonBases from './Components/aboutus/Materialabout';
import CustomizedAccordions from './Components/contactus/Materialcontact';
import Products from './Components/products/Products';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
     <Route path="/" element={<SignInSide />}/>
     <Route path="/registration" element={<SignUp />} />
     <Route path="/forgetpassword" element={<Forgetpassword/>} />
     <Route path="/aboutus" element={<ButtonBases />} />
     <Route path="/contactus" element={<CustomizedAccordions/>} />
     <Route path="/products" element={<Products />} />
     </Routes>
     <Footer/>
     </BrowserRouter>     
    </div>
  );
}

export default App;
