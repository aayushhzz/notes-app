const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router = express.Router();
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');

//fetch all notes endpoint /api/notes/fetchallnotes
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try{
    const notes = await Note.find({user : req.user});
    await res.send(notes);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

//add a new note endpoint /api/notes/addnote
router.post('/addnote', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

//update a note endpoint /api/notes/updatenote/:id using put request
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        let newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send('Not Found');
        }
        if (note.user.toString() !== req.user) {
            return res.status(401).send('Not Allowed');
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

//delete a note endpoint /api/notes/deletenote/:id using put request

router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send('Not Found');
        }
        if (note.user.toString() !== req.user) {
            return res.status(401).send('Not Allowed');
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success":"Note has been Deleted", note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;