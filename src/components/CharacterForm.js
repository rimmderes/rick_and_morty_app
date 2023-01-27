import { useState } from "react";

const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    })

const CharacterForm = ({postCharacter}) => {
    
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [error, setError] = useState('');

    const handleValidation = () => {
        if (name === "") {
            setError("Please enter name")
            return false;
        }
        return true;
    }

    const onChange = (file) => {
    
        if(!file) {
          setImage('');
          return;
        }
    
        fileToDataUri(file)
          .then(dataUri => {
            setImage(dataUri)
          })
        
      }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (handleValidation()) {
            console.log(image);
            // fileToDataUri(image).then(result => {

                const postBody = {
                    name,
                    image,
                    status,
                    species,
                }
                postCharacter(postBody);
                setName("");
                setImage("");
                setStatus("");
                setSpecies("");

            // })
            
        }
    };
    
    return ( 
        <form onSubmit={handleFormSubmit}>
            <h2>Create a Character</h2>
            <input
                type="text"
                placeholder="Character Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

            <input
                type="file"
                placeholder="file"
                // value={image}
                onChange={(e) => onChange(e.target.files[0] || null)} />

            <input
                type="text"
                placeholder="Character status"
                value={status}
                onChange={(e) => setStatus(e.target.value)} />

            <input
                type="text"
                placeholder="Character species"
                value={species}
                onChange={(e) => setSpecies(e.target.value)} />

            <button type="submit">Add Character</button>
            <p>{error}</p>

        </form>
     );
}
 
export default CharacterForm;