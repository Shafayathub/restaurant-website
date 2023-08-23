const SectionTitle = ({ heading, subHeading }) => {
  return (
    <section className="w-1/2 md:w-1/3 mx-auto my-8">
      <p className="text-center text-yellow-500 mb-2 italic text-sm md:text-base lg:text-lg">
        --- {subHeading} ---
      </p>
      <h3 className="dark:text-white text-center text-xl md:text-2xl lg:text-4xl font-semibold uppercase border-y-4 py-3">
        {heading}
      </h3>
    </section>
  );
};

export default SectionTitle;
