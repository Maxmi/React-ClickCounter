import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/app.scss';

ReactDOM.render(<App count={0} />, document.getElementById('app'));
