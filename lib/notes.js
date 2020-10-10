const fs = require('fs')
const path = require('path')

function createNewNote(newNote, noteArray) {

    const note = newNote;
      noteArray.push(note);
      fs.writeFileSync(
          path.join(__dirname, '../db/db.json'),
          JSON.stringify({ notes: noteArray }, null, 2),
    );
    return newNote
}

module.exports = {createNewNote}