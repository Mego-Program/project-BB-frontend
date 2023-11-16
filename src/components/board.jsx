import { Card, Container, TextField } from "@mui/material";
import { useState } from "react";
import { addObject, removObject, BoardObjects} from "./boardObject"
import Header from "./Settings/Header";
import SaveIcon from '@mui/icons-material/Save';





function NewBord(props) {
    const textFile = <TextField id="filled-basic" label="Filled" variant="filled"
    />
    var [title, setTitle] = useState("Title")
    var [description, setDescription] = useState("Description")

    const style = {
        textAlign: 'center'
    }

    return (
        
        <Container style={style}>
            <Header value="Add Project"/>
            <Card >
                <h1 style={{color: "#F6C927", background: "#121231" }}>{title}</h1>
                <p>{textFile}</p>
            </Card>
            <hr />
            <Card>
                <h2 style={{color: "#F6C927", background: "#121231" }}>{description}</h2>
                <p>{textFile}</p>
            </Card>
            <hr />
            <Card>
                <button>
                  <span>Save</span>    <span><SaveIcon/> </span>
              </button> 
            </Card>
            
        </Container>
    )
}


export { NewBord };