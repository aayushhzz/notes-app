import React,{useState} from "react";
import noteContext from "./noteContext.js";


const NoteState = (props) => {
    const notesInitial =[
        {
          "_id": "66771e5321a72de36f303226",
          "user": "6676c46f537a093fb110a152",
          "title": "this is title",
          "description": "please god banne do mujhe",
          "tag": "godly",
          "date": "2024-06-22T18:56:19.009Z",
          "__v": 0
        },
        {
          "_id": "66771e5521a72de36f303228",
          "user": "6676c46f537a093fb110a152",
          "title": "this is title",
          "description": "please god banne do mujhe",
          "tag": "godly",
          "date": "2024-06-22T18:56:21.780Z",
          "__v": 0
        },
        {
          "_id": "66771e5621a72de36f30322a",
          "user": "6676c46f537a093fb110a152",
          "title": "this is title",
          "description": "please god banne do mujhe",
          "tag": "godly",
          "date": "2024-06-22T18:56:22.261Z",
          "__v": 0
        },
        {
          "_id": "66771e5621a72de36f30322c",
          "user": "6676c46f537a093fb110a152",
          "title": "this is title",
          "description": "please god banne do mujhe",
          "tag": "godly",
          "date": "2024-06-22T18:56:22.660Z",
          "__v": 0
        },
        {
          "_id": "6677ce6d0003cdcc79e0a844",
          "user": "6676c46f537a093fb110a152",
          "title": "this is title",
          "description": "please god banne do mujhe",
          "tag": "godly",
          "date": "2024-06-23T07:27:41.120Z",
          "__v": 0
        },
        {
          "_id": "6677ce6f0003cdcc79e0a846",
          "user": "6676c46f537a093fb110a152",
          "title": "this is title",
          "description": "please god banne do mujhe",
          "tag": "godly",
          "date": "2024-06-23T07:27:43.698Z",
          "__v": 0
        },
        {
          "_id": "6677ce700003cdcc79e0a848",
          "user": "6676c46f537a093fb110a152",
          "title": "this is title",
          "description": "please god banne do mujhe",
          "tag": "godly",
          "date": "2024-06-23T07:27:44.876Z",
          "__v": 0
        }
      ]

    const [notes, setNotes] = useState(notesInitial);
      
    return (
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
};

export default NoteState