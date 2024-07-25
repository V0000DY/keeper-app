import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNote => {return [...prevNote, newNote] });
    }
    function deleteNote(id){
        setNotes((prevNotes) => {
            return prevNotes.filter((prevNote, index) => {
                return index !== id})});
    }
    
    return (
    <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((itemNote, index) =>
        <Note 
            key={index}
            id={index}
            title={itemNote.title}
            content={itemNote.content}
            onDelete={deleteNote}
        />)}
        <Footer />
    </div>);
}
export default App;