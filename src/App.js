import React from 'react';
import './App.css';
import List from './components/List.js'
import Cart from './components/Cart.js'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={sourceList : ["Item1","Item2","Item3","Item4"],
                    cartList: []
        };
    }

    render() {
        return (
            <div className="App">
                <div>
                    List Cart App
                </div>
                <div>
                    <List sourceList={this.state.sourceList}/>
                    <Cart cartList={this.state.cartList}/>
                </div>
            </div>
        );
    }
}


export default App;
