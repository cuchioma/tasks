import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={choice}
                onChange={(e) => {
                    setChoice(e.target.value);
                }}
            >
                {options.map((opt: string) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>

            {choice === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
