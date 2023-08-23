const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex gap-x-2 p-5">
      <img
        src={image}
        alt={name}
        className="w-[118px] h-[104px]"
        style={{ borderRadius: "0px 200px 200px 200px" }}
      />

      <div className="dark:text-white">
        <h2 className="uppercase">{name} ----------------</h2>

        <p className="text-sm text-gray-700 dark:text-white">{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
