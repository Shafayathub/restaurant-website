import { Helmet } from "react-helmet-async";
import Featured from "../../../Components/Featured/Featured";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import ChefRec from "../ChefRec/ChefRec";
import PopularMenu from "../PopularMenu/PopularMenu";
import SpecialItem from "../SpecialItem/SpecialItem";
import Testimonial from "../Testimonial/Testimonial";
import bgImage from "../../../assets/home/chef-service.jpg";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Home | Bistro Boss - Restaurant</title>
        <link
          rel="canonical"
          href="https://restaurant-website-fawn-one.vercel.app/"
        />
      </Helmet>
      <Banner></Banner>
      <Catagory></Catagory>
      <Featured
        img={bgImage}
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
