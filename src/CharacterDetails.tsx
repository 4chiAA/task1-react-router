import {Character} from "./characters.ts";
import {useParams} from "react-router-dom";

type CharacterDetailProps = {
    character: Character
}

export default function CharacterDetails(props: CharacterDetailProps){

    // const id:string|undefined = useParams().id

    return(
        <>
            <p>
                {props.character.name}
            </p>
            <p>
                {props.character.species}
            </p>
            <p>
                {props.character.status}
            </p>
            <p>
                {props.character.type}
            </p>
        </>
    )
}
