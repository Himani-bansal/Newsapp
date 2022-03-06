//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'

export class App extends Component {

  //apiKey = "9fcbc73a1c964ecfa5e94719db844718"
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>

        <BrowserRouter>

          <Navbar />

          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}

          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="business" pageSize={12} country="in" category="general" />}></Route>,

            <Route exact path="/General" element={<News setProgress={this.setProgress} key="general" pageSize={12} country="in" category="general" />}></Route>,
            <Route exact path="/Science" element={<News setProgress={this.setProgress} key="science" pageSize={12} country="in" category="science" />}></Route>,
            <Route exact path="/Health" element={<News setProgress={this.setProgress} key="health" pageSize={12} country="in" category="health" />}></Route>,
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="technology" pageSize={12} country="in" category="technology" />}></Route>,
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={12} country="in" category="entertainment" />}></Route>,
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} key="sports" pageSize={12} country="in" category="sports" />}></Route>,
            <Route exact path="/Business" element={<News setProgress={this.setProgress} key="business" pageSize={12} country="in" category="business" />}></Route>,




          </Routes>
        </BrowserRouter>,
      </div>

    );
  }



}

export default App

