import { useState } from 'react';
import Gallery from './components/Gallery';
import Button from './components/Button';
import StaticImageCard from './components/StaticImageCard/';
import Hero from './components/Hero/Hero';
import limone from './images/limone.jpg';
import ventilatore from './images/ventilatore.jpg'
import './App.css';

function App() {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <div className="App">

      <Hero titleContent="Welcome!"/>

      <Gallery visibility={isGalleryVisibile}/>

      <Button btnTextCont="show / hide" onHandleClick={() => setGalleryVisibility(!isGalleryVisibile)}/>

      <div className="App__randomContent">

        <StaticImageCard dataSrc={limone} titleContent="Il Limone" textContent='Il limone è il frutto di un sempreverde appartenente 
        alla famiglia delle Rutaceae, il Citrus limon. Questo albero, che può superare i 6 metri di altezza, 
        è caratterizzato da foglie color verde chiaro e frutti ovali la cui buccia può assumere le tonalità 
        del verde e del giallo che, contrariamente ai frutti di altre specie appartenenti al genere Citrus, 
        vengono prodotti in continuazione.'/>

        <StaticImageCard dataSrc={ventilatore} titleContent="Il Ventilatore" textContent="Il ventilatore è un dispositivo con una girante (o 'coclea') 
        azionata da un motore, con lo scopo di spostare un flusso aeriforme (spesso aria). Nel caso di ventilatori di piccole dimensioni, 
        si usa il termine 'ventola', mentre si usa il termine 'soffiante' per indicare i ventilatori di grosse dimensioni inseriti all'interno di un circuito."/>

      </div>
    </div>
  );
}

export default App;
