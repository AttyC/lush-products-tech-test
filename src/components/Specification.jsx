export const Specification = ({ weight }) => {
  return (
    <section>
      <div className={`py-8 px-8`} id='product-specification'>
        <h2 className={`text-2xl`}>Specifications</h2>
        <p>Weight:{weight}</p>
      </div>
    </section>
  );
};