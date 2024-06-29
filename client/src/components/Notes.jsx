import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
function Notes(props) {
  const context = useContext(noteContext);
  const { notes, fetchAllNotes,editNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('auth-token')!=null){
      fetchAllNotes();
    }
    else{
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const closeRef = useRef(null);
  const updateNote = (note) => {
    ref.current.click();
    setNote(note);
  };
    const handleClick = (e) => {
        e.preventDefault();
        editNote(note._id,note.title,note.description,note.tag);
        closeRef.current.click();
        props.showAlert('Note updated Successfully','success');
    };
  const onChange = (e) => {
    setNote({ ...note, [e.target.id]: e.target.value });
  };
  return (
    <>
      <AddNote showAlert = {props.showAlert}/>

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 my-4">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={note.title}
                  />
                </div>
                <div className="mb-3 my-4">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    onChange={onChange}
                    value={note.description}
                  />
                </div>
                <div className="mb-3 my-4">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    onChange={onChange}
                    value={note.tag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={closeRef}
              >
                Close
              </button>
              <button disabled = {note.title.length<5 || note.description.length<5 } onClick = {handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="my-2">Your Notes</h2>
      <div className="row my-4">
        <div className="container mx-3">
        {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert = {props.showAlert}/>
          );
        })}
      </div>
    </>
  );
}

export default Notes;
