import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={answer}
                onChange={(event) => {
                    setAnswer(event.target.value);
                }}
            />
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
