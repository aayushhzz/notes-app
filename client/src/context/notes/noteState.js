import React from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const state ={
        "name": "Harry",
        "class": "5b",
    }
    return (
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    )
};

export default NoteState;