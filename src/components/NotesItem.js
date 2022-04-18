import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { alertContext } from "../context/AlertContext";
function NotesItem(props) {
  const { note, updatenote } = props;
  const context = useContext(noteContext);
  const { deletenote } = context;
  const { showAlert } = useContext(alertContext);
   

  return (
    <>
      <div className="col-md-3 ">
        <div className="card my-3">
          <div className="card-body mainnn">
            <h5>Title</h5>
            <p className="card-title">{note.title}</p>
            <h5>Description</h5>
            <p className="card-text">{note.description}</p>
            <h5>Tag</h5>
            <p className="card-title">{note.tag}</p>
            <i
              className="fas fa-trash mx-2 "
              onClick={() => {
                
                  deletenote(note._id);
                  showAlert("success", "Note Deleted !");
              }}
            ></i>
            <i
              className="fas fa-edit mx-2"
              onClick={() => {
                updatenote(note);
                showAlert("success", "Note Edit successfully!");
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesItem;
