import featured from "../../assets/home/chef-service.jpg";

const Featured = ({ heading, paragraph }) => {
  return (
    <section
      className="hero my-10"
      style={{
        backgroundImage: `url(${featured})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-white py-5 md:py-10 lg:py-20">
        <div className="max-w-3xl bg-black bg-opacity-50 py-5 px-10 md:px-20 lg:px-30">
          <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
          <p className="mb-5 text-center">{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
