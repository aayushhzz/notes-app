import React from 'react'
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function NoteItem(props) {
    const {note,updateNote} = props;
    const context = useContext(noteContext);
    const {deleteNote} = context;
  return (
    <div className="col-md-3">
        <div className="card my-2">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <div className='d-flex flex-row'>
                    <i className="fa-solid fa-trash-can" style={{'cursor':'pointer'}} onClick={() => {deleteNote(note._id); props.showAlert('Note deleted Successfully','success');}}></i>
                    <i className="fa-regular fa-pen-to-square mx-3" style={{'cursor':'pointer'}} onClick={() => {updateNote(note)}}></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoteItem