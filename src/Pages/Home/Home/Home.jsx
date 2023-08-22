import Featured from "../../../Components/Featured/Featured";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import PopularMenu from "../PopularMenu/PopularMenu";

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
    </main>
  );
};

export default Home;
