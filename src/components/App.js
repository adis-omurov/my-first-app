import Input from "./components/Input";
import Lenght from "./components/Length";
import Range from "./components/Length" ;
import Dollar from "./components/Dollar";
import Example5 from "./components/Example5";
import Example5 from "./components/Example6";

function App() {
    let example = { color: "red" };
    let example2 = { backgroundColor: "tomato", color: "white" }
    return (
        <div className="App">
            <h3>Example 1</h3>
            <Length value="test"/>
            <h3>Example 2</h3>
            <Input value="#123411" />
            <h3>Example 3</h3>
            <Range min={0} max={10} value={3} />
            <h3>Example 4</h3>
            <Dollar/>
            <h3>Example5</h3>
            <Example5/>
            <h3>Example6</h3>
            <Example6/>
            <h3>Example7</h3>
            <ColorSliders min={0} max={10} value={3} />
        </div>
    );
}
export default App;


import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
    const example1 = ["Apple", "Lemon", "Kivi"];
    const example2 = ["Potato", "Cabbage", "Morkov"];
    return (
        <div className="App">
            <List items={example1} />
            <List items={example2} />
        </div>
    );
    
};
export default App;


import Person from "./components/Person";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Person name ="Bill Baike" age={47}>
                Ice skating, Eating donuts, Dancing under the moon
            </Person>
            <Person name="Bill Baike" age={50}>
            Saving the world
            </Person>
        </div>
    );
}

exort default App;