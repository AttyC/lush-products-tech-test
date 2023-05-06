import Image from "next/image";

export const Gallery = ({ vm }) => {
  let featureSize = 400;
  let listSize = 150;
  const gallery = vm.images.map((image) => {
    let width = image.sortOrder === 0 ? featureSize : listSize;
    return (
      <li
        key={image.sortOrder}
        className={`fit-border m-2 p-2 rounded-lg border hover:border-transparent transition-scale border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
      >
        <Image
          className='hover:scale-125'
          src={image.url}
          alt={image.alt}
          width={width}
          height={100}
          priority
        />
      </li>
    );
  });
  return <ul className={`lg:flex justify-center`}>{gallery}</ul>;
};
