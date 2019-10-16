import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.css';


const NavLinks = () => {
    return (
        <div>
            <div className="h2 bg-light">Accenture.. High Performance Delivered</div>
            <nav className="navbar navbar-default bg-light">
                <ul className="nav nav-pills navbar-right mr-auto ">
                    <li><Link to={'/'} className="nav-link "> Home </Link></li>
                    <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    <li><Link to={'/about'} className="nav-link">About</Link></li>
                    <li><Link to={'/help'} className="nav-link">Help</Link></li>
                </ul>
            </nav>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavLinks />
                    <hr />
                    <Routes />
                </div>
            </Router>
        );
    }
}

export default App;
