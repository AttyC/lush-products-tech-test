import Image from "next/image";

export const ProductDescription = ({ data }) => {
  const { name, category, descriptionText, stars, variants } = data;

  console.log("variants", variants);

  return (
    <div
      className={` lg:w-1/2 px-12 flex flex-col justify-around`}
      id='product-description'
    >
      <div>
        <p className={`font-medium`}>Category: {category.name}</p>
        <p>
          Stars: {stars} {}
        </p>
      </div>
      <ul className={`py-8 lg:pr-8 bg-white`}> {descriptionText}</ul>
    </div>
  );
};
