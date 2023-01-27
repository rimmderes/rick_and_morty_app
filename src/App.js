import './App.css';
import newlogo from "./newlogo.png"; 
import CharacterContainer from './containers/CharacterContainer';

function App() {
  return (
    <>
    <div className='header'>
    <div className="navbar">
      <img src={newlogo} alt = "logo" width="100"/> 
      
      
    </div>
    <div className="content">
    <h1>Rick and Morty</h1>
    <h1>Shawty!</h1>
    </div>
    </div>
    <div className='body'>
    <link href='https://fonts.googleapis.com/css?family=Press Start 2P' rel='stylesheet'></link>
    <CharacterContainer />
    </div>
    <footer >
    {/* <p>&copy; Rick and Morty 2023</p> */}
    </footer>
    </>
  );
}

export default App;
