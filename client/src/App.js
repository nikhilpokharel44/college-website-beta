/** @format */
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='_site_container'>
      <Router>
        <Nav />
        <div className='_main'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
