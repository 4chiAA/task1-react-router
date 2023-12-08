import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Route, Routes} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import Header from "./Header.tsx";
import CharacterDetails from "./CharacterDetails.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    // <Route path={"/characters/:id"} element={<CharacterDetails character={characters.find((char) => char.id)}/>}/>

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharacterGallery  characters={characters}/>}/>

            </Routes>
        </>
    )
}

export default App