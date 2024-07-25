import React, {useState} from "react";
import Zoom from '@mui/material/Zoom';
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';

function CreateArea (props){
    const [isClicked, setIsClicked] = useState(false);

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function inputClick (){
        setIsClicked(true);
    }

    function handleChage(e){
        const {name, value} = e.target;
        setNote(prevValue => {return {...prevValue, [name]: value}});
    }
    
    function handleClick(e){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        e.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isClicked && <input name="title" placeholder="Title" onChange={handleChage} value={note.title}></input>}
                <textarea name="content" placeholder="Take a note" onChange={handleChage} onClick={inputClick} rows={isClicked ? 3 : 1} value={note.content}></textarea>
                <Zoom in={isClicked}>
                    <Fab onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;