const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const { notes } = require('../../db/db.json')
const {createNewNote, deleteDuhNote} = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(notes)
})



router.post('/notes', (req, res) => {
    // pull in req.body entry with a unique id
    const newEntry = {
        title: req.body.title,
        text: req.body.text,
        id: uuid.v4()
    }
    if (!newEntry.text || !newEntry.title) {
        return res.status(400).json("Please enter a title and text")
    } else {
        const newNote = createNewNote(newEntry, notes)
        res.json(newNote)
    }

    // send to newNote function that will send to .json file
    // newNote(newEntry)

    res.json(newEntry)
});

router.delete('/notes/:id', (req, res) => {
    const found = notes.some(note => note.id === req.params.id);
    if(found) {
        // const deleteNote = notes.filter(note => note.id !== req.params.id)
        const deleteNote = req.params.id
        deleteDuhNote(deleteNote, notes);
    } else {
        res.status(404).json(`no Member with the id of ${req.params.id} was found`)
    }
});

module.exports = router;