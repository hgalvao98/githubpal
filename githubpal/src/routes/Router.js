import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReposPage from '../pages/ReposPage/ReposPage'
import StarredPage from '../pages/StarredPage/StarredPage'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
import ErrorPage from '../pages/ErroPage/ErrorPage'

const Router = () => {

    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/:username/repos'>
                    <ReposPage />
                </Route>
                <Route exact path='/:username/starred'>
                    <StarredPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router