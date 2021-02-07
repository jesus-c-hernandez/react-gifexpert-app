import React from 'react';
import ReactDOM from 'react-dom';
// Components
import GifExpertApp from './GifExpertApp';
// Styles
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(
    <GifExpertApp />,
    divRoot
);
