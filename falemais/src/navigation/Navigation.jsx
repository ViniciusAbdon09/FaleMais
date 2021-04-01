import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//components
import Header from '../components/Nav'
import Home from '../pages/Home/Home'
import Tariff from '../pages/Tariff/Tariff'


const Navigation = () => {
    return (
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
            <Route path="/calc" exact component={Tariff} />
            </Switch>
          </div>
        </Router>
      )
}

export default Navigation