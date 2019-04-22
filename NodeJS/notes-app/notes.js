const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    } else {
        console.log(chalk.red.inverse("Duplicated task"));
    }
};

const removeNote = title => {
    const notes = loadNotes();
    const removedNotes = notes.filter(note => note.title !== title);
    if (removedNotes.length === notes.length) {
        console.log(chalk.red.inverse("No note removed!"));
    } else {
        console.log(chalk.green.inverse(`Successful removed ${title}!`));
        saveNotes(removedNotes);
    }
};

const readNote = title => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log();
        console.log(chalk.green.inverse("Title: ", note.title));
        console.log(note.body + "\n");
    } else {
        console.log(chalk.red.inverse("Note not found!"));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green("Your note(s): "));
    notes.forEach(note => console.log(note.title));
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
};

const saveNotes = notes => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJson);
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
};
