
import './App.css';
import Header from './components/header/Header';
import Sneakers from "./utils/Sneakers";
import SneakerContext from "./contexts/SneakerContext";
import Main from './components/main/Main';

import {useState} from "react";

function App() {
  const [sneakers, ] = useState(Sneakers);
  const [sneakersCount, setSneakersCount] = useState(0);

  return (

    <div className="App">
      <SneakerContext.Provider 
        value={{ 
          sneakers,
          sneakersCount, 
          setSneakersCount
        }}>

        <Header />
        <Main />

      </SneakerContext.Provider>
    </div>
  );
}

export default App;
