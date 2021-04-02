import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './Components/LandingPage'
import LoginPage from './Components/LoginPage'
import RegisterPage from './Components/RegisterPage'
import ForgetPasswordPage from './Components/ForgetPasswordPage'
import HomePage from './Components/HomePage'

import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </div>
    </Router>
  )
}
