import React from 'react'
import './App.css'
import {BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Login from "./components/Login"
import { GlobalStyle } from './GlobalStyle'
import RenderDetails from "./components/RenderDetails";
import MainPage from "./components/Main_Page"
const App=()=> {

  return (
    <>
    <Router>
      <GlobalStyle/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/RenderDetails" element={<RenderDetails/>}/>
      <Route path="/MainPage" element={<MainPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
