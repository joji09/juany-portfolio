import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById('root');

const rootElement = ReactDOM.createRoot(root);

rootElement.render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();