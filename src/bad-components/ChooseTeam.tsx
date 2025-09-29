import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [allOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string): void {
        setTeam((curr) =>
            curr.includes(newMember) ? curr : [...curr, newMember],
        );
    }

    function clearTeam(): void {
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                size="sm"
                                onClick={() => {
                                    chooseMember(option);
                                }}
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <div style={{ marginTop: "8px" }}>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                clearTeam();
                            }}
                        >
                            Clear Team
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
