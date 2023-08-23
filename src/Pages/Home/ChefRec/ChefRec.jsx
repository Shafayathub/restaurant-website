import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ChefRecCard from "../../../Components/ChefRecCard/ChefRecCard";

const ChefRec = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data.slice(3, 6)));
  }, []);
  return (
    <section>
      <div className="w-4/5 mx-auto bg-black text-white my-10 p-10 md:p-15 lg:p-20">
        <h3 className="text-2xl font-bold text-center">
          Call Us: +88 0171XXXXXX
        </h3>
      </div>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTitle>
      <div className="mt-10 mb-20 grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 p-5">
        {menu.map((item) => (
          <ChefRecCard key={item?._id} item={item}></ChefRecCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRec;
