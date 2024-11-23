import "./App.css";
import Note from "./components/note/note";
import { Notes } from "./components/note/data";
import AddNote from "./components/add-note/add-note";
import { useState } from "react";
import type { NoteType } from "./components/note/note-type";

function App() {

  const [notes, setNotes] = useState(Notes)
  
  const addNote = (note: NoteType) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <AddNote addNote={addNote}></AddNote>
      <div>
        {notes.map((note) => (
          <Note key={note.id} priority={note.priority} text={note.text} />
        ))}
      </div>
    </div>
  );
}

export default App;
