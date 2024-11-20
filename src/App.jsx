import './App.css'
import HackList from '../components/HacksList/HackList';
import Navbar from '../components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

function App() {


  return (
    <>
    <BrowserRouter>

      <Navbar></Navbar>
      <HackList></HackList>
      <Footer></Footer>

      <Routes>
      <Route path="/" element={<home />}/>
      <Route path="/hacks" element={<hacks />}/>
      <Route path="/" element={<contato />}/>
      </Routes>
    
    </BrowserRouter>


    </>
  )
}

export default App
