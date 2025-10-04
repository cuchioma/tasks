import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("0"); // keep as string; convert on click

    const parsed = Number.parseInt(requested) || 0;

    return (
        <div>
            <h3>Give Attempts</h3>

            <div>Attempts left: {attempts}</div>

            <div style={{ marginTop: 8 }}>
                <input
                    type="number"
                    value={requested}
                    onChange={(e) => {
                        setRequested(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        setAttempts(attempts - 1);
                    }}
                    disabled={attempts <= 0}
                >
                    use
                </button>
                <button
                    onClick={() => {
                        setAttempts(attempts + parsed);
                    }}
                    disabled={parsed <= 0}
                >
                    gain
                </button>
            </div>
        </div>
    );
}
