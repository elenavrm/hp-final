import { useState } from 'react';
import ImgMediaCard from './ImgMediaCard';
import './styles.css';
import Buttons from './Buttons';
import { data } from './data';

function Staff() {
  const [people, setPeople] = useState(data);

  const chosenPeople = (searchTerm) => {
    const newPeople = data.filter((element) => element.searchTerm === searchTerm);
    setPeople(newPeople);
  };

  return (
    <div>
      <div className='sub-container'>
        <h1> Hogwarts Staff</h1>
      </div>
      <div>
        <Buttons filteredPeople={chosenPeople} />
        <ImgMediaCard people={people} />
      </div>
    </div>
  );
}

export default Staff;