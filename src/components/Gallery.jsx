import Image from "next/image";

export const Gallery = ({ vm }) => {
  const gallery = vm.images.map((image) => (
    <li key={image.id}>
      <Image
        className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
        src={image.url}
        alt={image.alt}
        width={400}
        height={100}
        priority
      />
    </li>
  ));
  return <ul>{gallery}</ul>;
};
