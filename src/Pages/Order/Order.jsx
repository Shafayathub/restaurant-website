import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import orderImage from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item?.category === "drinks");
  const dessert = menu.filter((item) => item?.category === "dessert");
  const pizza = menu.filter((item) => item?.category === "pizza");
  const salad = menu.filter((item) => item?.category === "salad");
  const soup = menu.filter((item) => item?.category === "soup");
  return (
    <>
      <Helmet>
        <title>Our Shop | Bistro Boss - Restaurant</title>
        <link
          rel="canonical"
          href="https://restaurant-website-fawn-one.vercel.app/"
        />
      </Helmet>
      <main className="min-h-screen">
        <Cover
          img={orderImage}
          heading={"Our Shop"}
          subHeading={"Order your favourite food"}
        ></Cover>
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="my-10"
        >
          <TabList className="flex justify-center mb-5">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <section className="flex flex-wrap justify-center gap-5">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </section>
          </TabPanel>
          <TabPanel>
            <section className="flex flex-wrap justify-center gap-5">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </section>
          </TabPanel>
          <TabPanel>
            <section className="flex flex-wrap justify-center gap-5">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </section>
          </TabPanel>
          <TabPanel>
            <section className="flex flex-wrap justify-center gap-5">
              {dessert.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </section>
          </TabPanel>
          <TabPanel>
            <section className="flex flex-wrap justify-center gap-5">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </section>
          </TabPanel>
        </Tabs>
      </main>
    </>
  );
};

export default Order;
