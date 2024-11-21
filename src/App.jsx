import './App.css';
import HackList from '../components/HacksList/HackList';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CreateHack from '../components/CreateHack/CreateHack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HackList />} />
        <Route path="/hacks" element={<HackList />} />
        <Route path="/create-hack" element={<CreateHack />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
