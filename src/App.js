import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Newscomp from './components/Newscomp';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Newscomp key="general" pageSize={6} country="in" category="general" />} />
            <Route path="/business" element={<Newscomp key="business" pageSize={6} country="in" category="business" />} />
            <Route path="/health" element={<Newscomp key="health" pageSize={6} country="in" category="health" />} />
            <Route path="/sports" element={<Newscomp key="sports" pageSize={6} country="in" category="sports" />} />
            <Route path="/technology" element={<Newscomp key="technology" pageSize={6} country="in" category="technology" />} />
            <Route path="/science" element={<Newscomp key="science" pageSize={6} country="in" category="science" />} />
            <Route path="/general" element={<Newscomp key="general" pageSize={6} country="us" category="general" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
