import { getUserById, User } from '@/services/user.service';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Users',
};

type UserDetailPageProps = {
  params: {
    id: string;
  };
}
async function resolveUserParams(
  params: UserDetailPageProps['params']
): Promise<{ id: string }> {
  return params;
}

export default async function UserDetailPage({ params }:UserDetailPageProps) {
  const { id } = await resolveUserParams(params)
  const user: User = await getUserById(id);

  return (
    <div className={'min-h-screen flex flex-col items-center mt-15 p-8 sm:p-20'}>
      <h1 className={'text-3xl font-bold mb-4'}>{user.name}</h1>
      <nav className="mb-6 space-x-4">
        <Link
          href={`/users/${id}/albums`}
          className="text-blue-500 hover:underline"
        >
          Albums
        </Link>
        <Link
          href={`/users/${id}/todos`}
          className="text-blue-500 hover:underline"
        >
          Todos
        </Link>
        <Link
          href={`/users/${id}/posts`}
          className="text-blue-500 hover:underline"
        >
          Posts
        </Link>
      </nav>
      <div>
        <p>Email: {user.email}</p>
        <p>City: {user.address.city}</p>
      </div>
    </div>
  );
}