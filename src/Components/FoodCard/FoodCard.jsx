const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} className="w-full" />
      </figure>
      <p className="bg-black rounded px-1 text-white text-lg font-semibold absolute right-5 top-8">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 dark:border-white bg-slate-300 dark:bg-neutral bg-opacity-50 text-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
