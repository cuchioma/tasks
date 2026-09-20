import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";

// ✅ Chapter 10 form-components you just finished
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { ChangeColor } from "./form-components/ChangeColor";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";

// “bad-components” sandbox
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Courtney Chioma
            </header>

            <hr />
            <CheckAnswer expectedAnswer="yes" />
            <hr />
            <GiveAttempts />
            <hr />
            <EditMode />
            <hr />
            <ChangeColor />
            <hr />
            <MultipleChoiceQuestion
                options={["dog", "cat", "fish"]}
                expectedAnswer="cat"
            />

            <hr />
            <Counter />
            <hr />
            <ChangeType />
            <hr />
            <RevealAnswer />
            <hr />
            <StartAttempt />
            <hr />
            <TwoDice />
            <hr />
            <CycleHoliday />

            {/* Sandbox / optional */}
            <hr />
            <ChooseTeam />
            <hr />
            <ColoredBox />
            <hr />
            <ShoveBox />
            <hr />
            <DoubleHalf />
        </div>
    );
}

export default App;
