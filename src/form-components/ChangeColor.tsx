import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const COLORS = [
        "red",
        "blue",
        "green",
        "pink",
        "purple",
        "orange",
        "black",
        "yellow",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c: string) => (
                <label key={c} style={{ marginRight: "10px" }}>
                    <input
                        type="radio"
                        name="colorChoice"
                        value={c}
                        checked={color === c}
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                    />
                    {c}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    width: "120px",
                    height: "40px",
                    border: "1px solid black",
                    backgroundColor: color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {color}
            </div>
        </div>
    );
}
