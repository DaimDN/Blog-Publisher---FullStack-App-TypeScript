import React, {FC, Fragment} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import {Homepage} from '../pages/Homepage'
import {Contact} from '../pages/contact'

export const Routes: FC= ()=> {
    return (

        <Router>
        <Fragment>

        </Fragment>

            <Switch>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/" component={Homepage}/>
               
            </Switch>
        </Router>
       
    )
}

