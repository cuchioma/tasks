import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
// import { StartAttempt } from "./components/StartAttempt";
// import { TwoDice } from "./components/TwoDice";
// import { CycleHoliday } from "./components/CycleHoliday";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Courtney Chioma
            </header>
            <hr />
            <Counter />
            <hr />
            <ChangeType />
            <hr />
            <RevealAnswer />
            {/* Add the other components here later once you finish them */}
        </div>
    );
}

export default App;
