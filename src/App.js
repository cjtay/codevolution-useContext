import React from 'react';
import './App.css';

import ComponentA from './components/ComponentA';

function App() {
    return (
        <div className="App">
            <h1>This is App component</h1>
            <p>
                This is just a very basic example of using context to pass
                simple static values down to another component
            </p>
            <ComponentA />
        </div>
    );
}

export default App;
