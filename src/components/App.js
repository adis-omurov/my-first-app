import { Route } from "react-router"
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home"; 
import Home from "./components/Home/Home"; 

function App() {
    const activeLinkStyle = {
        fontWeight: 'bold'
    }
    return (
        <div className="App">
            <ul>
        <li><NawLink activeStyle={activeLinkStyle} activeClassName="activeLink" href="/">Home</NawLink></li>
        <li><NawLink href="/contscts">Contacts</NawLink></li>
        <li><NawLink href="/about">About</NawLink></li>
        </ul>


         <Switch>
         c
         <Route path="/contacts" componets={Contacts} />
         <Route exact path="/" componets={Home} />
         </Switch>
        </div>
    );
}

export default App;