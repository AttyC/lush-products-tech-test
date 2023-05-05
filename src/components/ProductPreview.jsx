import Link from "next/link";

export const ProductPreview = ({ vm }) => {
  return (
    <li key={vm.key}>
      <Link href={"/products/" + vm.slug}>
        <div className='container'>
          <h2>{vm.name}</h2>
        </div>
      </Link>
    </li>
  );
};
