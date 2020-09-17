import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
