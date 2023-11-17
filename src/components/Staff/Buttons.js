function Buttons({ filteredPeople }) {
    return (
      <div className="change-btn">
        <button className='change' onClick={() => filteredPeople('professor')}>
          Professors
        </button>
        <button className='change' onClick={() => filteredPeople('staff')}>
          Staff
        </button>
      </div>
    );
  }
  
  export default Buttons;