import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";

const SpecialItem = () => {
  return (
    <section
      className="hero my-10"
      style={{
        backgroundImage: `url(${featured})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="text-white py-5 md:py-10 lg:py-20">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"Check it out"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center py-5 px-10 lg:py-20 lg:px-36">
          <div>
            <img src={featured} alt="featured" />
          </div>
          <div className="md:ml-10 text-white">
            <p className="mb-1">
              {new Date().toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <p className="uppercase mb-1">Where can I get some?</p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialItem;
