import { NoteProps } from "./note-type";
import "./note.css";

function Note(props: NoteProps) {
  return <div className={`note ${props.priority}`}>{props.text}</div>;
}

export default Note;
