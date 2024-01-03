import Filter from "./Filter";

const AllCategories = () => {
  return (
    <div className="filter-category">
      {['HARRY POTTER', 'FANTASTIC BEASTS', 'HOGWARTS', 'ALL BOOKS']
        .map((category, index) => (
          <Filter key={index} category={category} />
        ))}
    </div>
  );
};

export default AllCategories;