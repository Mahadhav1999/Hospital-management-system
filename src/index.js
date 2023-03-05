import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import Routing from './Routing';
import 'react-toastify/dist/ReactToastify.css';

/* Prime React Import */
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icon
import 'primeflex/primeflex.css';
import PrimeReact from 'primereact/api';

// For the ripple effect
PrimeReact.ripple = true;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HelmetProvider>
      <Routing />
    </HelmetProvider>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
