import { Redirect, Route, Switch } from "react-router";
import { NawLink } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home"; 
import NotFound from "./components/NotFound/Notfound";
import  './App.css';
import Posts from "./components/Posts/Posts";
import logo from ".images/Black Ant.png";
import Menu from "./components/Menu/Menu";
import RedButton from "./components/RedButton/RedButton";
import Example from "./components/Example/Example";
import Person from "./components/Person/Person";


function App() {
    const activeLinkStyle = {
        fontWeight: 'bold'
    }
    return (
        <div className="App">
            <ul className="ul">
        <li><NawLink activeStyle={activeLinkStyle} activeClassName="activeLink" to="/">Home</NawLink></li>
        <li><NawLink activeStyle={activeLinkStyle} activeClassName="activeLink" to="/contacts">Contacts</NawLink></li>
        <li><NawLink activeStyle={activeLinkStyle} activeClassName="activeLink" to="/about">About</NawLink></li>
        <li><NawLink activeStyle={activeLinkStyle} activeClassName="activeLink" to="/posts">Posts</NawLink></li>
        <li><NawLink activeStyle={activeLinkStyle} activeClassName="activeLink" to="/menu">Menu</NawLink></li>
        <li><NawLink activeStyle={activeLinkStyle} activeClassName="activeLink" to="/redbutton">RedButton</NawLink></li>
        </ul>
         <Switch>
         <Route path="/contacts" componets={Contacts} />
         <Route path="/about" componets={About} />
         <Route exact path="/" componets={Home} />
         <Route path="/posts" componets={Posts} />
         <Route path="/menu" componets={Menu} />
         <Route path="/menu" componets={redbutton} />
         </Switch>
        </div>
    );
}

export default App;