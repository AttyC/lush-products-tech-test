export const ProductDescription = ({ data }) => {
  const { category, currency, descriptionText, price, stars } = data;
  return (
    <div
      className={`lg:w-1/2 px-12 flex flex-col justify-around`}
      id='product-description'
    >
      <div>
        <p className={`font-medium`}>Category: {category.name}</p>
        <p>Stars: {stars}</p>
        <div>
          <p className={`text-sm font-bold`}>
            {currency}
            {price}.00
          </p>
        </div>
      </div>
      <ul className={`py-8 lg:pr-8 bg-white`}> {descriptionText}</ul>
    </div>
  );
};
