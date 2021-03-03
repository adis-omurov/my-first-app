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