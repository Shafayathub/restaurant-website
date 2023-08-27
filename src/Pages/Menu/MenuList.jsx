import MenuItem from "../../Components/MenuItem/MenuItem";

const MenuList = ({ items }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 dark:border-white bg-slate-300 dark:bg-neutral bg-opacity-50 text-black dark:text-white">
          Order Your Favourite Food
        </button>
      </div>
    </>
  );
};

export default MenuList;
