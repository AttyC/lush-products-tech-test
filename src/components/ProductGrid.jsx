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
      <div className='flex flex-wrap justify-around container items-between container lg:my-6 bg-gray-50 flex-col sm:flex-row'>
        <div className='btn-group flex flex-col price-btn items-center  '>
          <button
            onClick={() => handleSorting("price")}
            className='font-medium text-sm px-4 py-2 m-2 md:w-auto border-b-2 border-gray-300 hover:bg-gray-200 transition-colors text-gray-700'
          >
            Sort By Price (Low - High)
          </button>
          <button
            onClick={() => handleSorting("-price")}
            className='font-medium text-sm px-4 py-2 m-2 w-full md:w-auto border-b-2 border-gray-300 hover:bg-gray-200 transition-colors text-gray-700'
          >
            Sort By Price (High - Low)
          </button>
        </div>
        <div className='btn-group flex flex-col rating-btn items-center'>
          <button
            onClick={() => handleSorting("-rating")}
            className='font-medium text-sm px-4 py-2 m-2 w-full md:w-auto border-b-2 border-gray-300 hover:bg-gray-200 transition-colors text-gray-700'
          >
            Sort By Rating (High - Low)
          </button>
          <button
            onClick={() => handleSorting("rating")}
            className='font-medium text-sm px-4 py-2 m-2 w-full md:w-auto border-b-2 border-gray-300 hover:bg-gray-200 transition-colors text-gray-700'
          >
            Sort By Rating (Low - High)
          </button>
        </div>{" "}
        <div className='btn-group flex flex-col category-btn items-center'>
          <button
            onClick={() => handleSorting("category")}
            className='font-medium text-sm px-4 py-2 m-2 w-full md:w-auto border-b-2 border-gray-300 hover:bg-gray-200 transition-colors text-gray-700'
          >
            Sort By Category (A-Z)
          </button>
          <button
            onClick={() => handleSorting("-category")}
            className='font-medium text-sm px-4 py-2 m-2 w-full md:w-auto border-b-2 border-gray-300 hover:bg-gray-200 transition-colors text-gray-700'
          >
            Sort By Category (Z-A)
          </button>
        </div>
        <div className='btn-group flex flex-col name-btn items-center'>
          <button
            onClick={() => handleSorting("-name")}
            className='font-medium text-sm px-4 py-2 m-2 w-full md:w-auto border-b-2 border-gray-300 hover:bg-gray-200 transition-colors text-gray-700'
          >
            Sort By Name (A-Z)
          </button>
          <button
            onClick={() => handleSorting("name")}
            className='font-medium text-sm px-4 py-2 m-2 w-full md:w-auto border-b-2 border-gray-300 hover:bg-gray-200 transition-colors text-gray-700'
          >
            Sort By Name (Z-A)
          </button>
        </div>
      </div>
      <ul
        className={`flex flex-wrap min-h-screen  justify-center container lg:mx-16 py-2`}
      >
        <Sorted />
      </ul>
    </>
  );
};
