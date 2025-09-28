import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Setter = React.Dispatch<React.SetStateAction<number>>;

function Doubler({ setValue }: { setValue: Setter }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue((v) => v * 2);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ setValue }: { setValue: Setter }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue((v) => v / 2);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    // ✅ Tests expect initial value to be 10
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setValue={setDhValue} />
            <Halver setValue={setDhValue} />
        </div>
    );
}
