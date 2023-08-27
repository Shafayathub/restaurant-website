import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle
        heading={"Popular Items"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 dark:border-white bg-slate-300 dark:bg-neutral bg-opacity-50 text-black dark:text-white">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
