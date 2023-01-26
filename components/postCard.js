import Link from 'next/link';

export default function PostCard({ slug, data }) {
  return (
      <Link href={`/${encodeURIComponent(slug)}`} prefetch={false}>
        <a
          style={{ backgroundImage: `url(/${slug}/images/${data.coverImage})` }}
          className="flex flex-col justify-center items-center relative overflow-hidden w-full aspect-square p-8 bg-stone-100 rounded-2xl bg-cover"
        >
          <span className="text-xl md:text-2xl p-4 bg-slate-50 font-bold">
            {data.title}
          </span>
        </a>
      </Link>
    )
}
