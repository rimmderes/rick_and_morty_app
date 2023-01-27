const Character = ({character, deleteCharacter}) => {

    // const handleChange = () => {

    return ( 
        
        <>
        <section className="characters">
        <div className="card" >
        <h4> {character.name} </h4>
        <img src={character.image} alt="here is the pic" width={250} height={250}/>
        <p>Status: {character.status} </p>
        <p> Species: {character.species} </p>

    <div className="character-buttons" >
    <button onClick={() => deleteCharacter(character.id)}>Delete</button>
    </div>
    </div>
    </section>
        </>
     );
}
//  }
export default Character;