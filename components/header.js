import Link from 'next/link';

export default function Header() {

  return (
    <header className="section">
      <nav className="container  level">
        <h1 className="level-item  has-text-centered  title">
          <Link href="/">
            <a className="has-text-black">Живущие мечтой</a>
          </Link>
        </h1>
      </nav>
    </header>
  )
}
