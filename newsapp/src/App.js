import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import News from './Components/News';
import About from './Components/About';
import { BrowserRouter as Route, Routes} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
      <Navbar/>
      <Routes>
        <Route path="/" element={<News pageSize={9} category="general" country="in"/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/business" element={<News pageSize={9} category="business" country="in"/>} />
        <Route path="/technology" element={<News pageSize={9} category="/technolog" country="in"/>} />
        <Route path="/sports" element={<News pageSize={9} category="sports" country="in"/>} />
        <Route path="/science" element={<News pageSize={9} category="science" country="in"/>} />
        <Route path="/health" element={<News pageSize={9} category="health" country="in"/>} />
        <Route path="/entertainment" element={<News pageSize={9} category="entertainment" country="in"/>} />
      </Routes>
      
      <Footer/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></script>
      </>
    )
  }
}
