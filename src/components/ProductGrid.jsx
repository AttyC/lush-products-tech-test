import sortBy from "sort-by";
import { ProductPreview } from "./ProductPreview";

export const ProductGrid = (data) => {
  const sortedVm = data.data.products.sort(sortBy("category", "sortOrder"));

  return (
    <ul className={`flex flex-wrap min-h-screen  justify-center lg:mx-16 py-2`}>
      {sortedVm.map((productVm) => (
        <ProductPreview vm={productVm} key={productVm.key} />
      ))}
    </ul>
  );
};
