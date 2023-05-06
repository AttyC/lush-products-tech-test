import Image from "next/image";
import Link from "next/link";

export const ProductPreview = ({ vm }) => {
  // create a viewModel to gain control over the shape of the data and remove the logic from the UI
  // let viewModel = { images: [] };
  // vm.images.forEach((image) => {
  //   let imageVm = {
  //     id: image.id,
  //     url: image.url,
  //     alt: image.alt,
  //     sortOrder: image.sortOrder,
  //   };
  //   viewModel.images.push(imageVm);
  // });

  return (
    <li key={vm.key} className='lg:mr-8 mb-8 grid text-center lg:text-left'>
      <Link
        href={"/products/" + vm.slug}
        className='group rounded-lg border border-transparent transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
      >
        <h2 className={`py-4 px-4`}>{vm.name}</h2>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src={vm.thumbnail.url}
          alt={vm.thumbnail.alt}
          width={300}
          height={100}
          priority
        />
        <div className={`py-4 px-4 bg-gray-100`}>
          <p className={`text-sm`}>{vm.category}</p>
        </div>
      </Link>
    </li>
  );
};
