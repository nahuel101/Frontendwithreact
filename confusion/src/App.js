import logo from './logo.svg';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';
import { DISHES } from './shared/dishes';
//si quiero usar un componente, lo importo primero ahi arriba y despues lo pongo donde quiero que vaya

class App extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Marino Iunes</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}/>
            </div>
        );
    }
}

export default App;
