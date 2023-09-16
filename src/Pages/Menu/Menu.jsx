import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import menuImage from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";

import Loading from "../Shared/Loading/Loading";
import Featured from "../../Components/Featured/Featured";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuList from "./MenuList";

const Menu = () => {
  const [menu, loading] = useMenu();
  if (loading) {
    return <Loading></Loading>;
  }

  const todaysOffer = menu.filter((item) => item?.category === "offered");
  const dessert = menu.filter((item) => item?.category === "dessert");
  const pizza = menu.filter((item) => item?.category === "pizza");
  const salad = menu.filter((item) => item?.category === "salad");
  const soup = menu.filter((item) => item?.category === "soup");

  return (
    <>
      <Helmet>
        <title>Menu | Bistro Boss - Restaurant</title>
        <link
          rel="canonical"
          href="https://restaurant-website-fawn-one.vercel.app/"
        />
      </Helmet>
      <main className="mb-5">
        <Cover
          img={menuImage}
          heading="OUR MENU"
          subHeading="Would you like to try a dish?"
        ></Cover>
        {/* today's offer */}
        <SectionTitle
          heading={"Today's Offer"}
          subHeading={"Don't Miss Out"}
        ></SectionTitle>
        <MenuList items={todaysOffer}></MenuList>
        {/* Desserts */}
        <Featured
          img={dessertImg}
          heading={"DESSERTS"}
          paragraph={
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Featured>
        <MenuList items={dessert}></MenuList>
        {/* Pizza */}
        <Featured
          img={pizzaImg}
          heading={"Pizza"}
          paragraph={
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Featured>
        <MenuList items={pizza}></MenuList>
        {/* Salad */}
        <Featured
          img={saladImg}
          heading={"Salad"}
          paragraph={
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Featured>
        <MenuList items={salad}></MenuList>
        {/* Soup */}
        <Featured
          img={soupImg}
          heading={"Soup"}
          paragraph={
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Featured>
        <MenuList items={soup}></MenuList>
      </main>
    </>
  );
};

export default Menu;
