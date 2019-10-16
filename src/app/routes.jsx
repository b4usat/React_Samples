import React from 'react'
import { Switch, Route } from 'react-router-dom';

import { About, Help } from '../about/about.jsx'
import Contact from '../contact/contact.jsx'
import Home from '../home/home'
import NotFound from '../error/notfound.jsx'
import SimpleForm from '../../Forms/inputform'
import FormContainer from '../../Forms/FormValidation'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={FormContainer} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
            <Route exact path='/help' component={Help} />
            <Route path="*" exact={true} component={NotFound} />
        </Switch>
    )
}
