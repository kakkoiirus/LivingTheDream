import Link from 'next/link';

export default function Header() {

  return (
    <header className="p-12">
      <nav className="">
        <h1 className="text-center text-2xl md:text-3xl font-black bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
          <Link href="/">
            <a className="">living the dream</a>
          </Link>
        </h1>
      </nav>
    </header>
  )
}
