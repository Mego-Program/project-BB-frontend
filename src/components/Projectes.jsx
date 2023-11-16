import { Card, Container } from "@mui/material";
import { BoardObjects } from "./boardObject";

import React from "react";

function Projectes(props) {

    return (
        <Container style={{ textAlign: "center" }}>
            <Card >
                <a href={props.URL}><h1 style={{ color: "#F6C927", background: "#121231" }}>{props.title}</h1></a>
                <h3 style={{ color: "#F6C927"}}>Description</h3>
                <p>{props.description}</p>
                <p style={{fontSize: '8px', color: "#F6C927"}}>{props.time}</p>
            </Card>
            <br />
            <br />
        </Container>
    )
}


export { Projectes };
