import Character from "./Character";

const CharacterList = ({characters, deleteCharacter}) => {
    // let mappedCharacters = characters.map((character, id) => {
    //     return <Character character={character}/>

    const characterComponents = characters.map(character => {
        return <Character
                key={character.id}
                character={character} 
                deleteCharacter={deleteCharacter}/>
    })

    return ( 
        <>
        <hr />
        
        <h2>Characters</h2>
        {/* <hr /> */}

        
            <section className="components">
            {characterComponents}
            </section>
        </>

     );
}
 
export default CharacterList;