import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import PortfolioItem from '../components/PortfolioItem';
import Page404 from '../components/Page404';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch> 
                <Route path = '/' component = {Dashboard} exact = {true}/>
                <Route path = '/contact' component = {Contact} />
                <Route path = '/portfolio' component = {Portfolio} exact = {true} />
                <Route path = '/portfolio/:_id' component = {PortfolioItem} />
                <Route component = {Page404} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;