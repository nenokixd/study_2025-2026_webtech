import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
// Hollow Knight Silksong 
import HksMain from './pages/hks/HksMain';
import HksEquipment from './pages/hks/HksEquipment';
import HksWorld from './pages/hks/HksWorld';
import HksHornet from './pages/hks/HksHornet';
import HksTools from './pages/hks/HksTools';
import HksItems from './pages/hks/HksItems';
import HksCrests from './pages/hks/HksCrests';
import HksSkills from './pages/hks/HksSkills';
import HksAbilities from './pages/hks/HksAbilities';
import HksUpgrades from './pages/hks/HksUpgrades';
import HksPatches from './pages/hks/HksPatches';
import HksSteelsoul from './pages/hks/HksSteelsoul';
import HksMap from './pages/hks/HksMap';


import './styles-new.css';
import './styles/auth.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hks/map" element={<HksMap />} />

          
          <Route path="/hks" element={<HksMain />} />
          <Route path="/hks/equipment" element={<HksEquipment />} />
          <Route path="/hks/world" element={<HksWorld />} />
          

          <Route path="/hks/tools" element={<HksTools />} />
          <Route path="/hks/items" element={<HksItems />} />
          <Route path="/hks/crests" element={<HksCrests />} />
          <Route path="/hks/skills" element={<HksSkills />} />
          <Route path="/hks/abilities" element={<HksAbilities />} />
          <Route path="/hks/upgrades" element={<HksUpgrades />} />
          
          <Route path="/hks/hornet" element={<HksHornet />} />
          <Route path="/hks/patches" element={<HksPatches />} />
          <Route path="/hks/steelsoul" element={<HksSteelsoul />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;