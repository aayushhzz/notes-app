import React from "react";
import { useContext,useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"",description:"",tag:""});

    const handleClick = async (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""});
        props.showAlert("Note Added Successfully","success")
    };
    const onChange = (e) => {
        setNote({ ...note, [e.target.id]: e.target.value });
    };
  return (
    <div>
      <h2>Add a new Note</h2>
      <form>
        <div className="mb-3 my-4">
          <label htmlFor="title" className="form-label" >
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
          <label htmlFor="description" className="form-label" >
            Description
          </label>
          <input type="text" className="form-control" id="description" value={note.description} onChange={onChange}/>
        </div>
        <div className="mb-3 my-4">
          <label htmlFor="tag" className="form-label" >
            Tag
          </label>
          <input type="text" className="form-control" id="tag" value={note.tag} onChange={onChange}/>
        </div>
        <button disabled = {note.title.length<5 || note.description.length<5 } type="submit" className="btn btn-primary my-2" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
