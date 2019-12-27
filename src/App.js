import React, {Component} from 'react';
import './App.css';
import NavBar from '../src/Pages/NavigationBar';
import Home from '../src/Pages/Home';
import FAQ from '../src/Pages/FAQ';
import Gallery from '../src/Pages/Gallery';
import BookNow from '../src/Pages/BookNow';
import Contact from '../src/Pages/Contact';
import Shop from '../src/Pages/Shop';
import Footer from '../src/Pages/Footer';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';


class App extends Component {


componentWillMount(){
  document.title = "MyBeautyShop"
}


  render(){
  return (
    <Router> 
      <div>
        <NavBar/>
        <Switch>   
          <Route exact path='/' component={Home} />  
          <Route path='/FAQ' component={FAQ} />
          <Route path='/Gallery' component={Gallery} />
          <Route path='/BookNow' component={BookNow} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Shop' component={Shop} />
        </Switch> 
        <Footer/>
    </div>
    </Router>
   
    );
  }
}

export default App;