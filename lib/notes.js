const fs = require('fs')
const path = require('path')
const { notes } = require('../db/db.json')

function createNewNote(newNote, noteArray) {

    const note = newNote;
      noteArray.push(note);
      fs.writeFileSync(
          path.join(__dirname, '../db/db.json'),
          JSON.stringify({ notes: noteArray }, null, 2),
    );
    return newNote
}

function deleteDuhNote(noteid, noteArray) {
    // console.log(noteid)
    const removeId = noteArray.map(function(item) { return item.id; }).indexOf(noteid);

    // remove object
    const done = noteArray.splice(removeId, 1);
    
    // for (var i = 0; i < noteArray.length; i++) {
    //     var obj = noteArray[i];
    //     // console.log(obj.id)
    //     // get index of object with id:37
    
        
        
    //     // if (noteid.indexOf(obj.id) !== -1) {
    //     //     const edit = noteArray.splice(i, 1);
    //     //     console.log(edit)
    //     // }
    // }
}
module.exports = {createNewNote, deleteDuhNote}