import { useState } from "react";
function Example5() {
    const [size, setSize] = useState(16);
    return (
        <div className="Example5">
            <span style={{ fontSize: size + "px" }}>Example</span>
            <input type="number"
            value={size}
            onInput={(event) => setText(event.target.value)} />
        </div>
    );
}

export default Example5;