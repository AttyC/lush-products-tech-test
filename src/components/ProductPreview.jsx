import Image from "next/image";
import Link from "next/link";

export const ProductPreview = ({ vm }) => {
  return (
    <li
      key={vm.key}
      className='md:mr-4 mb-8 grid text-center lg:text-left  max-h-84 overflow-hidden'
    >
      <Link
        href={"/products/" + vm.slug}
        className='flex flex-col justify-between rounded-lg border transition-colors border-gray-100 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
      >
        <h2 className={`py-4 px-4 text-xl font-md`}>{vm.name}</h2>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert md:w-64'
          src={vm.thumbnail.url}
          alt={vm.thumbnail.alt}
          width={400}
          height={100}
        />
        <div
          className={`preview-infromation flex justify-between py-4 px-4 bg-gray-100`}
        >
          <div>
            <p className={`text-sm`}>Stars: {vm.rating}</p>
            <p className={`text-sm font-bold`}>{vm.category}</p>
          </div>
          <div>
            <p className={`text-sm font-bold`}>
              {vm.currency}
              {vm.price}.00
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};
