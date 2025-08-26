import React from  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/product' element={<ProductPage/>} />
        <Route path='/pricing' element={<PricingPage/>} />
        <Route path='/support' element={<SupportPage/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>);ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/product' element={<ProductPage/>} />
          <Route path='/pricing' element={<PricingPage/>} />
          <Route path='/support' element={<SupportPage/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
