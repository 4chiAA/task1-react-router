import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Route, Routes} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import Header from "./Header.tsx";
import NewCharacter from "./NewCharacter.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    function updateCharacter(newCharacter:Character) {
        setCharacters([...characters, newCharacter])
    }

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharacterGallery  characters={characters}/>}/>
                <Route path={"/newcharacter"} element={<NewCharacter addNewProduct={updateCharacter}/>}/>
            </Routes>
        </>
    )
}

export default App