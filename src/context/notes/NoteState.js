import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "https://notetake-app.herokuapp.com";
  const inistialnotes = [];
  const [notes, setnotes] = useState(inistialnotes);
  //fetch all notes
  const getnotes = async () => {
    //todo api call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",

        "auth-token": localStorage.getItem("token")

      },


    });

    const json = await response.json()
    console.log(json)
    setnotes(json)
  };





  //add note
  const addnote = async (title, description, tag) => {
    //todo api call

    const response = await fetch(`${host}/api/notes/addNotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        "auth-token": localStorage.getItem("token")

      },

      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
    setnotes(notes.concat(note))

  };
// get use info 
const  getsuerInfo = async () => {
  //todo api call

  const response = await fetch(`${host}/api/auth/getuser`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",

      "auth-token": localStorage.getItem("token")

    },

  });
  const json = await response.json()

  console.log(json);

 
};
   

  //delete note
  const deletenote = async (id) => {
    //todo api call

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",

        "auth-token": localStorage.getItem("token")

      },

    });
    const json = await response.json()

    console.log(json);

    console.log("deleting the note with is " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
  };

  // Edit a Note
  const editnote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ title, description, tag })
    });

   

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setnotes(newNotes);
  }


  return (
    <NoteContext.Provider value={{ notes, addnote, deletenote, editnote, getnotes,getsuerInfo }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;


