const Cover = ({ img, heading, subHeading }) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-white py-5 md:py-10 lg:py-20">
        <div className="max-w-3xl bg-black bg-opacity-50 mt-10 pt-10 py-5 px-10 md:px-20 lg:px-56">
          <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
          <p className="mb-5 text-center uppercase">{subHeading}</p>
        </div>
      </div>
    </section>
  );
};

export default Cover;
