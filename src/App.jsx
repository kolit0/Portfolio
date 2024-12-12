import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';
import { MainSkills } from './pages/MainSkills';
import {BrowserRouter, Routes, Route} from 'react-router';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Skills" element={<MainSkills />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
