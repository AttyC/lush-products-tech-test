import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={`py-8 mb-12 flex justify-center bg-gray-100`}>
      <ul>
        <Link
          href={"/"}
          className='py-4 px-8 text-lg rounded-lg border border-transparent transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        >
          Home
        </Link>
      </ul>
    </nav>
  );
}
