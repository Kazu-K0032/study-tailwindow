import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 w-full items-center bg-purple-50">
        <div className="flex w-full items-center px-8">
          <h1 className="text-xl font-bold sm:text-3xl">Study Tailwindow</h1>
        </div>
      </header>
      <div className="flex-1 bg-gray-100 px-2 py-4">
        <ul className="flex flex-col gap-4 pl-6">
          <li className="text-lg font-semibold">
            <Link href="/posts" className="hover:text-purple-600">
              Posts
            </Link>
          </li>
          <li className="text-lg font-semibold">
            <Link href="/users" className="hover:text-purple-600">
              Users
            </Link>
          </li>
          <li className="text-lg font-semibold">
            <Link href="/calendar" className="hover:text-purple-600">
              Calendar
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
