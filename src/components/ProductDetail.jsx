import Image from "next/image";
import Link from "next/link";

export const ProductDetail = ({ vm }) => {
  return (
    <main className={`min-h-screen container mx-auto`}>
      <section
        className={`flex flex-wrap  className='group rounded-lg border border-gray-300`}
      >
        <div className={`py-4 px-2 lg:w-1/2`}>
          <ul className={`flex justify-around`}>{gallery}</ul>
        </div>
        <div
          className={` lg:w-1/2 flex flex-col justify-around`}
          id='product-description'
        >
          {" "}
          <h1 className={`text-4xl lg:mr-8 bg-gray-100`}>{name}</h1>
          <div>
            <p>{category.name}</p>
            <p>Stars: {rating}</p>
          </div>
          <ul className={`py-8 lg:pr-8 bg-white`}> {descriptionText}</ul>
        </div>
      </section>
      <section>
        <div className={`py-8 px-8`} id='product-specification'>
          <h2 className={`text-2xl`}>Specifications</h2>
          <p>Weight:{productWeight}</p>
        </div>

        <Link href={"/"}>
          <button>Back</button>
        </Link>
      </section>
    </main>
  );
};
