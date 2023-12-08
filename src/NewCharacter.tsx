import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./characters.ts";

type AddCharacterProps = {
    addNewProduct:(newCharacter:Character) => void
}

export default function NewCharacter(props:AddCharacterProps){

    const [id, setId] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const [species, setSpecies] = useState<string>("")
    const [type, setType] = useState<string>("")

    // diese Version habe ich auch unten in kurz geschrieben
    function updateId(event:ChangeEvent<HTMLInputElement>) {
        setId(Number(event.target.value))
    }

    const createNewCharacter = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert("A character was submitted: " + name);
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
                        onChange={updateId}
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