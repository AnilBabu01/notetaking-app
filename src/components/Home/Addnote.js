import React, { useContext, useState } from "react";
import noteContext from "../../context/notes/noteContext";
import { alertContext } from "../../context/AlertContext";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Addnote.css";
function Addnote() {
  const context = useContext(noteContext);

  const { addnote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const { showAlert } = useContext(alertContext);

  const handleClick = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    showAlert("success", "Note Add successfully!");
    setOpen(false);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        style={{
          backgroundColor: " #3a3ae2",
          paddingLeft: "10px",
          paddingRight: "10px",
          marginTop: "85px",
          border: "none",
          height: "35px",
          borderRadius: "5px",
          color:"white"
        }}
        onClick={handleClickOpen}
      >
        ADD Note+
      </button>
      <Dialog style={{ marginTop: "-150px" }} open={open} onClose={handleClose}>
        <DialogTitle>Add a Note</DialogTitle>
        <DialogContent style={{ width: "500px" }}>
          <DialogContentText>
            <div className="addmobileview">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="emailHelp"
                    value={note.title}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={note.description}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={note.tag}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>

                <button
                  disabled={
                    note.title.length < 5 || note.description.length < 5
                  }
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Add Note
                </button>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Addnote;
