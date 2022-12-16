import React from "react";
import "./Meme.css"
import database from "../database/database"

export default function Meme(){
    let url
    const memesArr = database.data.memes
    function clicked(){
        const random = Math.floor(Math.random() * memesArr.length);
       url = memesArr[random].url
        console.log(url)
    } 

    return(
        <main>
            <p>{url}</p>
           <div className="meme--form">
                <input type="text" className="meme--input"
                    placeholder="Inserisci qualcosa"
                ></input>
                <input type="text" className="meme--input"
                    placeholder="Inserisci qualcosa" 
                ></input>
                <button onClick={clicked}  className="meme--button">Get a new meme image  🖼</button>
           </div>
        </main>
    )
}

