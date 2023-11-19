
import Animation from './Animation';
import './styles.css'

function Home() {
    return (
        <div>
        <div className="home-container">
        <h1 className='home-title'><span className="w">W</span>elcome to  <span className="w">H</span>ogwarts </h1>
        <h2 className="rest"> School of Witchcraft and  Wizardry</h2>
    </div>
    <div>
        <Animation />
    </div>
        <div className='home-container'>
            <p className='overview'>
                <span className='space'>S </span>tep into the hallowed corridors of  Hogwarts School of Witchcraft and Wizardry
                , where every stone tells a tale, and every portrait holds the wisdom of centuries past. 
                Here, the flutter of robes harmonizes with the whispering secrets of ancient tomes, and the very air crackles with untamed magic.</p>
        
            <p className='overview'>
            <span className='space'>E </span>mbrace the marvels that await as you traverse these enchanted halls—where potions bubble, creatures of myth roam in imagination, and spells weave through the very fabric of existence. Feel the pulse of the castle, alive with the echoes of countless stories and the resonance of countless incantations.
            </p>

            <p className='overview'>
            <span className='space'>W </span>elcome, seekers of knowledge and wielders of the mystical arts, to a place where curiosity is nourished, dreams take flight, and each sunrise brings the promise of a new enchantment. Within these venerable walls, the extraordinary becomes commonplace, and the impossible is merely an undiscovered spell away.
            </p>
        </div>
        </div>
    )
}

export default Home;