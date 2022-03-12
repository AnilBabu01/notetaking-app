const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchUse");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
//route 1 get all the notes using get api/notes/fetchallnotes

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//route 2 add all  notes using post api/notes/addNotes login require

router.post(
  "/addNotes",
  [
    body("title", "Enter at leat 5 character").isLength({ min: 5 }),

    body("description", "description must be at least 5 char").isLength({
      min: 5,
    }),
  ],
  fetchuser,

  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // If there are errors, return Bad request and the errors login require
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const svatednotes = await note.save();

      res.json(svatednotes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//route 3 update note in an existing  note using put api/notes/updatenote login require
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // Create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//route 4 delete note in an existing  note using delete api/notes/deletenote login require
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
   

    // Find the note to be deleted and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
  //allow deletetion if this user of own note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndDelete( req.params.id);
    res.json({ "Success": "note has been deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
