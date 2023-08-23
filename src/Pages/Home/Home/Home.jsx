import Featured from "../../../Components/Featured/Featured";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import ChefRec from "../ChefRec/ChefRec";
import PopularMenu from "../PopularMenu/PopularMenu";
import SpecialItem from "../SpecialItem/SpecialItem";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Catagory></Catagory>
      <Featured
        heading={"Bistro Boss"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      ></Featured>
      <PopularMenu></PopularMenu>
      <ChefRec></ChefRec>
      <SpecialItem></SpecialItem>
      <Testimonial></Testimonial>
    </main>
  );
};

export default Home;
