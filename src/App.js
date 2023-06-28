import './assets/css/style.css';
import './assets/css/responsive.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/pages/home';
import Aboutus from './component/pages/about-us';
import Service from './component/pages/service';
import Productdetails from './component/pages/productdetails';
import Allproducts from './component/pages/Product/allproducts';
import Canineproduct from './component/pages/Product/canineproduct';
import Patnersproduct from './component/pages/Product/patnersproduct';
import Veterinary from './component/pages/Petcare/veterinary';
import Patcarering from './component/pages/Petcare/petcrering';
import Grooming from './component/pages/Petcare/gloorming';
import Contact from './component/pages/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<Aboutus />} />
          <Route path='/our-service' element={<Service />} />
          <Route path='/product-details' element={<Productdetails />} />
          <Route path='/all-products' element={<Allproducts />} />
          <Route path='/canine-products' element={<Canineproduct />} />
          <Route path='/patners-products' element={<Patnersproduct />} />
          <Route path='/vererinary' element={<Veterinary />} />
          <Route path='/carering' element={<Patcarering />} />
          <Route path='/grooming' element={<Grooming />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
