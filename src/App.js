import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App=()=>{
  const apikey=process.env.REACT_APP_NEWS_API;
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<News key="general" pageSize={6} apikey={apikey} country="in" category="general"/>} />
            <Route path="/about" element={<News key="general" pageSize={6} apikey={apikey} country="in" category="general"/>} />
            <Route path="/business" element={<News key="business" pageSize={6} apikey={apikey} country="in" category="business"/>} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={6} apikey={apikey} country="in" category="entertainment"/>} />
            <Route path="/general" element={<News key="general" pageSize={6} apikey={apikey} country="in" category="general"/>} />
            <Route path="/health" element={<News key="health" pageSize={6} apikey={apikey} country="in" category="health"/>} />
            <Route path="/science" element={<News key="science" pageSize={6} apikey={apikey} country="in" category="science"/>} />
            <Route path="/sports" element={<News key="sports" pageSize={6} apikey={apikey} country="in" category="sports"/>} />
            <Route path="/technology" element={<News key="technology" pageSize={6} apikey={apikey} country="in" category="technology"/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}
export default App;

