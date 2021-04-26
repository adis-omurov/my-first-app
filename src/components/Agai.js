import { render } from "@testing-library/react";
import { use State } from "react";

function Agai() {
    console.log('App.js render');

    const [number, setNumber] = useState(0);

    function increaseCallback() {
        setNumber(number + 1);
    }

    return (
        <div className="Agai">
            {number}
            <button onClick={increaseCallback}>Increase</button>
        </div>

    );
}

export default Agai;