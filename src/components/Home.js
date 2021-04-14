import { Route } from "react-router"
import About from "./components/Contacts/Contacts";

function Contacts() {
    return (
        <div className="Contacts">
         This is Contacts.js
         <Route path="/about" componets={Contacts} />
         <Route path="/about" componets={Contacts} />
        </div>
    );
}

export default Contacts;