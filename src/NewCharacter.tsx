import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./characters.ts";

type AddCharacterProps = {
    addNewProduct:(newCharacter:Character) => void
}

export default function NewCharacter(props:AddCharacterProps){

    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")
    const [species, setSpecies] = useState("")
    const [type, setType] = useState("")

    const createNewCharacter = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert("A character was submitted: " + name + " " + species);
        const newCharacter:Character = {id:id, name:name, status:status, species:species, type:type}
        props.addNewProduct(newCharacter)
        setId(0)
        setName("")
        setStatus("")
        setSpecies("")
        setType("")
    }

    return (
        <>
            <form onSubmit={createNewCharacter}>
                    <label> Create your own character
                    <input
                        type="number"
                        value={id}
                        placeholder={"Please enter a id"}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setId(Number(event.target.value))}
                    />
                    </label>
                    <label>
                    <input
                        type="text"
                        value={name}
                        placeholder={"Please enter a name"}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                    />
                    </label>
                    <label>
                    <input
                        type="text"
                        value={status}
                        placeholder={"Please enter a status"}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setStatus(event.target.value)}
                    />
                    </label>
                    <label>
                    <input
                        type="text"
                        value={species}
                        placeholder={"Please enter a species"}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setSpecies(event.target.value)}
                    />
                    </label>
                    <label>
                    <input
                        type="text"
                        value={type}
                        placeholder={"Please enter a type"}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setType(event.target.value)}
                    />
                    </label>
                <button> Create Character </button>
            </form>
        </>
    )
}