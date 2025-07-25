import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Details from './components/Details';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product' element={<Product/>} />
       <Route path='/product/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
