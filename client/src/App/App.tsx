import React, {FC, Fragment} from 'react'
import {Routes} from '../Route'
import {Navbar} from '../components/Navbar'

 export const App: FC =()=> {
    return (
        <Fragment>
            <Navbar/>
            <Routes/>
                      
        </Fragment>
    )
}
