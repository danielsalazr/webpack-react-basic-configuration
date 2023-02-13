import React from 'react';
// import ReactDom from 'react-dom';
import ReactDom from 'react-dom/client';
import App from './components/App';
import './styles/global.scss';
import './styles/bootstrap.min.css';

ReactDom.createRoot (document.getElementById('app')).render(<App />, );