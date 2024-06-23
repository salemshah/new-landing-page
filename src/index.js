import React from 'react';
import ReactDOM from 'react-dom/client';
import "./languages/i18n"
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import './scss/style.scss';
import {ToastContainer} from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
            <ToastContainer />
        </BrowserRouter>
    </React.StrictMode>,
);
