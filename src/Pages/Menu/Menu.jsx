import { Helmet } from "react-helmet-async";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu | Bistro Boss - Restaurant</title>
        <link
          rel="canonical"
          href="https://restaurant-website-fawn-one.vercel.app/"
        />
      </Helmet>
      <div className="min-h-screen">Our Menu</div>
    </>
  );
};

export default Menu;
