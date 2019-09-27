import React from 'react';
import './App.css';
import List from './components/List.js'
import Cart from './components/Cart.js'

function App() {
    return (
        <div className="App">
            <div>
                List Cart App
            </div>
            <div>
                <List/>
                <Cart/>
            </div>
        </div>
    );
}

export default App;
