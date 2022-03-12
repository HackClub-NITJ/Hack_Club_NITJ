import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.Fragment>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.Fragment>,
    document.getElementById("root")
);
