import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import News from './Components/News';
export default class App extends Component {
  render() {
    return (
      <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
      <Navbar/>
      <News pageSize="15" topic="apple"/>
      <Footer/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></script>
      </>
    )
  }
}
