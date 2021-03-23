import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />

        <Switch>
            <Route exact path="/" component={About} />
            <Route path="/Gallery" component={Gallery} />
            <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
