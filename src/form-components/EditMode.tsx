import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <div className="form-switch">
                <input
                    type="checkbox"
                    checked={isEdit}
                    onChange={(e) => {
                        setIsEdit(e.target.checked);
                    }}
                />{" "}
                Editing
            </div>

            {isEdit ?
                <div style={{ display: "grid", gap: 8, maxWidth: 280 }}>
                    <label>
                        Name:{" "}
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />{" "}
                        Student
                    </label>
                </div>
            :   <div style={{ marginTop: 8 }}>
                    {name} is {isStudent ? "" : "not "}a student
                </div>
            }
        </div>
    );
}
