import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import Projects from './pages/Projects';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddStudent} />
          <Route path="/edit/:id" component={EditStudent} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;