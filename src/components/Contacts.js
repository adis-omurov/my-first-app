import { Route } from "react-router"
import App from "./App";
import About from "./components/Contacts/Contacts";

function Contacts() {
    return (
        <div className="Contacts">
         <Switch>
         <Route exact path="/" componets={Home} />
         <Route path="/about" componets={About} />
         <Route path="/contacts" componets={Contacts} />
         </Switch>
        </div>
    );
}

export default App;