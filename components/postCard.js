import Link from 'next/link';
import Image from 'next/image';

export default function PostCard({ slug, data }) {
  return (
      <Link
        href={`/${encodeURIComponent(slug)}`}
        passHref
        prefetch={false}
        className="relative flex flex-col items-center justify-center w-full p-8 overflow-hidden bg-cover aspect-square bg-gradient-to-r from-stone-100 via-stone-200 to-stone-300 rounded-2xl"
      >   
          <Image
            src={`/${slug}/images/${data.coverImage}`}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1024px) 50vw,
              33vw"
            style={{ objectFit: 'cover' }}
            alt={data.title}
          />
          <span className="absolute z-20 p-4 m-8 text-xl font-bold md:text-2xl bg-slate-50">
            {data.title}
          </span>
      </Link>
    )
}
