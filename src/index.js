import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const LangContext = React.createContext();
export const ThemeContext = React.createContext();

ReactDOM.render(
    <React.StrictMode>
        <LangContext.Provider value={{ lang1: 'Chn', lang2: 'Eng' }}>
            <ThemeContext.Provider value={'Black'}>
                <App />
            </ThemeContext.Provider>
        </LangContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
