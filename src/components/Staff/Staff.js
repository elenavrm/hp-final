import { useState } from 'react';
import ImgMediaCard from './ImgMediaCard';
import './styles.css';
import Buttons from './Buttons';
import { StaffData } from './StaffData';

function Staff() {
  const [people, setPeople] = useState(StaffData);

  const chosenPeople = (searchTerm) => {
    const newPeople = StaffData.filter((element) => element.searchTerm === searchTerm);
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