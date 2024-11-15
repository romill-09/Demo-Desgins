// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import WelcomePage from './components/WelcomePage';
import AuthPage from './components/AuthPage';
import GuidelinesPage from './components/GuidelinesPage';
import MachineInterfacePage from './components/MachineInterfacePage';
import AcceptedPlasticPage from './components/AcceptedPlasticPage';
import RejectedPlasticPage from './components/RejectedPlasticPage';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/machine-interface" element={<MachineInterfacePage />} />
          <Route path="/accepted-plastic" element={<AcceptedPlasticPage />} />
          <Route path="/rejected-plastic" element={<RejectedPlasticPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;