import Link from 'next/link';

export default function Header() {

  return (
    <header className="p-12">
      <nav className="grid place-items-center">
        <h1 className="text-2xl font-black text-center text-transparent md:text-3xl bg-gradient-to-r from-fuchsia-400 to-purple-600 bg-clip-text">
          <Link href="/">
            living the dream
          </Link>
        </h1>
      </nav>
    </header>
  )
}
