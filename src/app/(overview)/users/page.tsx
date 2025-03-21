import { getUsers, User } from '@/services/user.service';
import Link from 'next/link';


export default async function UsersPage() {
    const users: User[] = await getUsers();

    return (
      <div className={'flex flex-col items-center mt-15 p-8 sm:p-20 w-fit mx-auto text-left'}>
          <h1 className="text-2xl font-bold mb-4 self-start">Users</h1>
          <ul className="space-y-2">
              {users.map((user) => (
                <li key={user.id}>
                    <Link href={`/users/${user.id}`} className="text-blue-500 hover:underline">
                        {user.name}
                    </Link>
                </li>
              ))}
          </ul>
      </div>
    );
}