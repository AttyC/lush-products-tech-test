import Image from "next/image";
import Link from "next/link";

export const ProductPreview = ({ vm }) => {
  console.log("vm", vm);
  return (
    <li key={vm.key}>
      <Link href={"/products/" + vm.slug}>
        <h2>{vm.name}</h2>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src={vm.images[0].url}
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </Link>
    </li>
  );
};
