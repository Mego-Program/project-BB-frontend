import React, { useState } from "react";
import { Card, Container } from "@mui/material";
import { NewBord } from "./board";
import Footer from "./Footer";
import Header from "./Settings/Header";
import { BoardObjects } from "./boardObject";
import { Projectes } from "./Projectes";



export default function AppProjectes() {
    var [goToBoard, setGoToBoard] = useState(false);
    function clickAdd() {
        setGoToBoard(true)
    }
    const MEGO = 'https://mego.org.il/';
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };

    return (
        <Container style={{ textAlign: "center" }}>
            {goToBoard ? (
                <>
                    <NewBord />
                    <Footer />
                </>
            ) : (
                <>
                    <Header value="Projects" />
                    {BoardObjects.map((item) => (
                        <Projectes
                            key={item.id} 
                            title={item.title}
                            description={item.description}
                            time={item.time}
                            URL={MEGO}
                        />
                    ))}
                    <Card style={{
                        fontSize: "30px",
                        cursor: "pointer",
                        userSelect: "none",
                        color: hovered ? "blue" : "black",
                    }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={clickAdd}>
                        +
                    </Card>
                    <Footer />
                </>
            )}
        </Container>
    );
}

