import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={`md:py-4 mb-8 flex justify-center bg-gray-100`}>
      <ul>
        <li className='py-4 px-8 text-lg rounded-lg border border-transparent transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
          {" "}
          <Link href={"/"} className='underline'>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
