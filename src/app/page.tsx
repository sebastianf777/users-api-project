import Link from 'next/link';

export default function Home() {
  return (
    <div className={'min-h-screen flex flex-col items-center justify-center mt-15 p-8 gap-16 sm:p-20'}>
      <div className={'flex flex-col gap-8'}>
        <Link
          href={'/users'}
          className={'px-6 py-3 bg-terciary hover:bg-secondary text-white rounded transition'}
        >
          All Users
        </Link>
        <Link
          href={'/posts'}
          className={'px-6 py-3 bg-terciary hover:bg-secondary text-white rounded transition'}
        >
          All Posts
        </Link>
        <Link
          href={'/albums'}
          className={'px-6 py-3 bg-terciary hover:bg-secondary text-white rounded transition'}
        >
          All Albums
        </Link>
      </div>
      <footer className={'text-sm text-white-500'}>
        Users API Exercise made by Sebastian Fontana
      </footer>
    </div>
  );
}
