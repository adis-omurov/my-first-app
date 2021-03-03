import { useState } from "react";
function Example6() {
    const [size, setSize] = useState(16);
    return (
        <div className="Example6">
            <span style={{ color: color + "px" }}>Example6</span>
            <input type="number"
            value={size}
            onInput={(event) => setText(event.target.value)} />
        </div>
    );
}

export default Example6;