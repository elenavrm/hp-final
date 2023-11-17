import { useEffect, useState } from 'react';
import { LoaderPage } from './LoaderPage';
import './styles.css'


function Spells() {
    const [spells, setSpells] = useState("");
    const [stateLoader, setStateLoader] = useState(true);

    const fetchSpells = async () => {
    setStateLoader(true);
    
    const response = await fetch("https://hp-api.onrender.com/api/spells");
    const data = await response.json();
    
    const randomSpell = data[Math.floor(Math.random() * data.length)];
    
    setSpells({
        name: randomSpell.name,
        description: randomSpell.description
    });
    setStateLoader(false); 
    };

    useEffect(() => {
        fetchSpells();
    }, []);
    
    return (
    <div>
    {stateLoader ? (
    <LoaderPage />
   ) : (
    <>
    <div className='spells-container'>
        <h1>Let's Learn Some Spells</h1>
    </div>
    <div className='spells-container'>
        <img src={'https://media.glamour.com/photos/5829d6680700a182135fdca1/master/w_2240,c_limit/harry-potter-spells.gif'}
        alt='Harry with a wand'
        width='400px'/>
    </div>
    <div className='spells-container'>
    <h2 className='spell-name'> {spells.name} </h2>
    </div>
    <div className='spells-container'>
        <h3 className='spell-description'>{spells.description}</h3>
    </div>
    <div className='spells-container'>
        <button onClick={fetchSpells} className='spells-btn'>New Spell</button>
    </div>
    </>
    )}
</div>
);
    }
export default Spells;