import React from "react";
import "./Meme.css"
import database from "../database/database"

export default function Meme(){
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState(database)
    const memesArr = allMemeImage.data.memes
    function clicked(){
        const random = Math.floor(Math.random() * memesArr.length);
        const url = memesArr[random].url
        setMeme(el =>(
            {...el, randomImage : url}
        )
        )
    } 
    
    return(
        <main>
           <div className="meme--form">
                <input type="text" className="meme--input"
                    placeholder="Inserisci qualcosa"
                ></input>
                <input type="text" className="meme--input"
                    placeholder="Inserisci qualcosa" 
                ></input>
                <img src={meme.randomImage} alt="Meme" className="meme--image"></img>
                <button onClick={clicked}  className="meme--button">Get a new meme image  🖼</button>
           </div>
        </main>
    )
}

