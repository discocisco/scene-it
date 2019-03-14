import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Home from './main/Home.js'
import Movies from './main/movies/Movies.js'
import MoviePage from './main/movies/MoviePage.js'
import ReviewCreate from './main/movies/ReviewCreate.js'
import ReviewEdit from './main/movies/ReviewEdit.js'
import FindTheater from './main/movies/FindTheater.js'

import Alert from 'react-bootstrap/Alert'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <Alert key={index} dismissible variant={alert.type}>
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </Alert>
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <Route exact path='/' render={() => (
            <Home alert={this.alert} set={this.setUser} user={user} />
          )} />
          <Route exact path='/movies' render={() => (
            <Movies alert={this.alert} setUser={this.setUser} user={user} />
          )} />
          <Route exact path='/movies/:id' render={() => (
            <MoviePage alert={this.alert} setUser={this.setUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/movies/:id/review-create' render={() => (
            <ReviewCreate alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/reviews/:id/edit' render={() => (
            <ReviewEdit alert={this.alert} user={user} />
          )} />
          <Route exact path='/find-theater' render={() => (
            <FindTheater alert={this.alert} setUser={this.setUser} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
