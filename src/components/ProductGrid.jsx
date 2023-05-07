import sortBy from "sort-by";
import { useEffect, useState } from "react";
import { ProductPreview } from "./ProductPreview";

export const ProductGrid = (data) => {
  let products = data.data.products;
  const [type, setType] = useState("");
  const [sorted, setSorted] = useState(products);

  useEffect(() => {
    console.log("type", type);
  }, [type]);

  const handleSorting = (type) => {
    setType(type);
    sortByType(type);
  };

  const sortByType = (type) => {
    let sortedProducts = products.sort(sortBy(`${type}`));
    setSorted(sortedProducts);
  };

  const Sorted = () =>
    sorted.map((productVm) => (
      <ProductPreview vm={productVm} key={productVm.key} />
    ));

  return (
    <>
      <div className='flex flex-wrap justify-between items-between lg:bg-gray-100 container lg:my-16'>
        <button
          onClick={() => handleSorting("-rating")}
          className='font-medium text-sm px-4 py-2 lg:m-4 m-2 w-full border-b-2 border-gray-300 hover:bg-gray-100 transition-colors text-gray-700'
        >
          Sort By Rating (High to Low)
        </button>
        <button
          onClick={() => handleSorting("rating")}
          className='font-medium text-sm px-4 py-2 lg:m-4 m-2 w-full border-b-2 border-gray-300 hover:bg-gray-100 transition-colors text-gray-700'
        >
          Sort By Rating (Low to High)
        </button>
        <button
          onClick={() => handleSorting("category")}
          className='font-medium text-sm px-4 py-2 lg:m-4 m-2 w-full border-b-2 border-gray-300 hover:bg-gray-100 transition-colors text-gray-700'
        >
          Sort By Category (A-Z)
        </button>
        <button
          onClick={() => handleSorting("-category")}
          className='font-medium text-sm px-4 py-2 lg:m-4 m-2 w-full border-b-2 border-gray-300 hover:bg-gray-100 transition-colors text-gray-700'
        >
          Sort By Category (Z-A)
        </button>
        <button
          onClick={() => handleSorting("name")}
          className='font-medium text-sm px-4 py-2 lg:m-4 m-2 w-full border-b-2 border-gray-300 hover:bg-gray-100 transition-colors text-gray-700'
        >
          Sort By Name (A-Z)
        </button>
        <button
          onClick={() => handleSorting("-name")}
          className='font-medium text-sm px-4 py-2 lg:m-4 m-2 w-full border-b-2 border-gray-300 hover:bg-gray-100 transition-colors text-gray-700'
        >
          Sort By Name (Z-A)
        </button>
      </div>
      <ul
        className={`flex flex-wrap min-h-screen  justify-center lg:mx-16 py-2`}
      >
        <Sorted />
      </ul>
    </>
  );
};
