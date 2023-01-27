import { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import CharacterForm from "../components/CharacterForm";
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import CharacterContainer from './containers/CharacterContainer';
// import Home from './components/Home';
// import About from './components/About';
// // import New Characters from './components/NewCharcters';
// // import Contact from './components/Contact';
// import { useState } from 'react';

const SERVER_URL = "http://localhost:8080"




const CharacterContainer = () => {

    // const [user, setUser] = useState("Pickles") 

//     <BrowserRouter>

// <ul>
//           <li> <Link to="/">Home</Link> </li>
//           <li> <Link to="/about">About</Link> </li>
//           {/* <li> <Link to="/newCharacters">New Characters</Link> </li>  */}
//           {/* <li> <Link to="/contact">Contact</Link> </li>  */}
//         </ul>
//         <Routes>
//           {/* routh path on http */}
//           <Route path="/" element={ <Home  user={user} /> } />
//           <Route path="/about" element={ <About user={user} /> }/>
//           {/* <Route path="/newCharacters" element={ <New Character user={user} /> }/> */}
//           {/* <Route path="/contact" element={ <Contact user={user} /> }/>  */}
//         </Routes>
    
//     </BrowserRouter>

    const [characters, setCharacters] = useState([]);
    // const[error, setError] = useState()
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character/");
            const data = await response.json();
            setCharacters(data.results);
            // .catch((err) => setError(err.message));
        }
        fetchData()
    }, []);


    const postCharacter = (newCharacter) => {
                setCharacters([...characters, newCharacter])
                
};

    const deleteCharacter = (id) => {
        fetch(`${SERVER_URL}/characters/${id}`, {
                    method: "DELETE",
                    headers: {'Content=Type' : "application/json"}
        });

        const newCharacters = characters.filter(character => character.id !== id)
        setCharacters(newCharacters)
    };
        // if (error !== "") return <p>Error! {error}</p>  

    return (
        <>
        <CharacterForm postCharacter={postCharacter} />
        <CharacterList characters={characters} deleteCharacter={deleteCharacter}/>
        {/* characters ? <CharacterList characters={characters} /> : <p> Loading Characters...</p> */}
        
        </>
    )

}
 
export default CharacterContainer;