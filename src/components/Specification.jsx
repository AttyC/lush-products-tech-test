export const Specification = ({ data }) => {
  const { productWeight, variants } = data;

  console.log("data", data);
  return (
    <div className={`py-8 px-8`} id='product-specification'>
      <h2 className={`text-2xl`}>Specifications</h2>
      <p>
        Weight: {productWeight.value} {productWeight.unit}
      </p>
      <p>In stock: {variants[0].quantityAvailable}</p>
      <p>Stock number: {variants[0].sku}</p>
    </div>
  );
};
