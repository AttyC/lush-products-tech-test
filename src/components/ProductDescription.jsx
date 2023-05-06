import Image from "next/image";

export const ProductDescription = ({ data }) => {
  const { name, category, descriptionText, rating } = data;
  return (
    <div
      className={` lg:w-1/2 px-12 flex flex-col justify-around`}
      id='product-description'
    >
      {" "}
      <h1 className={`text-4xl lg:mr-8 bg-gray-100`}>{name}</h1>
      <div>
        <p className={`font-medium`}>Category: {category.name}</p>
        <p>Stars: {rating}</p>
      </div>
      <ul className={`py-8 lg:pr-8 bg-white`}> {descriptionText}</ul>
    </div>
  );
};
