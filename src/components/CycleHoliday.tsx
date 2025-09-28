import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎃" | "🎆" | "🦃" | "💘";

const alphabetOrder: Record<Holiday, Holiday> = {
    "🎄": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
    "🦃": "💘",
    "💘": "🎄",
};

const yearOrder: Record<Holiday, Holiday> = {
    "💘": "🎆", // Valentine’s → Independence Day
    "🎆": "🎃", // Independence Day → Halloween
    "🎃": "🦃", // Halloween → Thanksgiving
    "🦃": "🎄", // Thanksgiving → Christmas
    "🎄": "💘", // Christmas → Valentine’s
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(alphabetOrder[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>{" "}
            <Button
                onClick={() => {
                    setHoliday(yearOrder[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
