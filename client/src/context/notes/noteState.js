import React,{useState} from "react";
import noteContext from "./noteContext.js";
import axios from 'axios';

const host = "http://localhost:4999";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  const fetchAllNotes = async ()=>{
    let response = await axios.get(`${host}/api/notes/fetchallnotes`,{
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token')
      }
    });
    setNotes(response.data);
  };
    //Add a note
    const addNote = async (title, description,tag)=>{
      let response = await axios.post(`${host}/api/notes/addnote`,{title,description,tag},{
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth-token')
        }
      });
      const note = response.data;
      setNotes(notes.concat(note))
    };
    //Delete a note
    const deleteNote = async (id)=>{
      await axios.delete(`${host}/api/notes/deletenote/${id}`,{
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth-token')
        }
      });
      setNotes(notes.filter((note)=>{return note._id!==id}))
    };
    //Edit a note
    const editNote = async (id,title,description,tag)=>{
      await axios.put(`${host}/api/notes/updatenote/${id}`,{title,description,tag},{
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth-token')
        }
      });
      const newnotes = [];
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id===id){
          element.title = title;
          element.description = description;
          element.tag = tag;
          newnotes.push(element);
        }
        else{
          newnotes.push(element);
        }
      }
      setNotes(newnotes);
    };
    return (
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote,fetchAllNotes}}>
            {props.children}
        </noteContext.Provider>
    )
};

export default NoteState