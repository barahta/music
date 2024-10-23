import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AudioProvider} from "./hooks/AudioContext";
import {DataProvider} from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AudioProvider>
        <DataProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        </DataProvider>
    </AudioProvider>
);

