import { useState } from "react";
function Range({ value, min, max }) {
    const [text, setNumber] = useState(value ?? "");
    return (
        <div className="Range">
            <input type="range"
            min={min}
            max={max}
             value={number}
              onInput={(event) => setNumber(event.target.value)} /> {number}/{max}
        </div>
    );
}

export default Range;