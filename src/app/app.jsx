import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Routes } from './routes'
//import 'bootstrap/dist/css/bootstrap.css';

import { About, Help } from '../about/about.jsx'
import Contact from '../contact/contact.jsx'
import Home from '../home/home'
import NotFound from '../error/notfound.jsx'

// const NavLinks = () => {
//     return (
//         <div></div>
//     )
// }

class App extends Component {
    render() {
        return (
            <Router>
                <div>
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
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/help' component={Help} />
                        <Route path="*" exact={true} component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
