import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientPage from './pages/Main.js';
import Main from "./pages/Main.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {observer} from "mobx-react-lite";
import About from "./pages/About";
import SingersPage from "./pages/SingersPage";
import ScopePage from "./pages/ScopePage";
import Gallery from "./pages/Gallery";


function App() {
  return (
      <Router>
        <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/singers" element={<SingersPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/scope" element={<ScopePage />} />
        </Routes>
          <ToastContainer />
      </Router>
  );
}

export default observer(App)
