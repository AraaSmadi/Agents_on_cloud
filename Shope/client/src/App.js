import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Component/Login';
import Register from './Component/Register';
import Add from './Component/Add';
// import Show from './Component/Show';
import Edit from './Component/Edit';
import Nav from './Layout/Nav';
import Footer from './Layout/Footer';
import  Index from './Component/Index';
import Contact from './Component/Contact';
import About from './Component/About';
import Single from './Component/Single';
function App() {
  return (

    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          {/* <Route path="/show" element={<Show />} /> */}
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
