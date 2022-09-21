import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import theme from './theme'

import './stylesheets/index.css';
import './fonts/Blackgold-qGAl.otf'

import App from './App';
import About from './routes/About';
import Spring from './routes/Spring';
import Summer from './routes/Summer';
import Fall from './routes/Fall'
import Winter from './routes/Winter'
import Over18 from "./routes/Over18";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);
