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
        this.handleClickList = this.handleClickList.bind(this);
        this.handleClickCart = this.handleClickCart.bind(this);
    }

    handleClickList(item) {
        console.log(item);
        const set = new Set(this.state.cartList);

        if(!set.has(item)){
            let array = this.state.sourceList;

             array = array.filter(function(value, index, arr){

                return value != item;

            });
            this.setState({cartList: [...this.state.cartList, item],
                           sourceList: array});

        }
    }

    handleClickCart(item) {
        console.log(item);
        const set = new Set(this.state.sourceList);

        if(!set.has(item)){
            let array = this.state.cartList;

            array = array.filter(function(value, index, arr){

                return value != item;

            });
            this.setState({sourceList: [...this.state.sourceList, item],
                cartList: array});

        }
    }

    render() {
        return (
            <div className="App">
                <div>
                    List Cart App
                </div>
                <div>
                    <List sourceList={this.state.sourceList} handleClickList={this.handleClickList}/>
                    <Cart cartList={this.state.cartList} handleClickCart={this.handleClickCart}/>
                </div>
            </div>
        );
    }
}


export default App;
