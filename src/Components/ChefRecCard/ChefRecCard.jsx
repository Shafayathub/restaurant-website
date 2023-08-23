const ChefRecCard = ({ item }) => {
  const { image, name, recipe } = item;
  return (
    <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} className="w-full" />
      </figure>
      <div className="card-body items-center text-center dark:text-white">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions mt-5">
          <button className="btn btn-outline border-0 border-b-4 dark:border-white bg-slate-300 dark:bg-neutral bg-opacity-50 text-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecCard;
