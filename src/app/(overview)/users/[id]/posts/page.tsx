import { getPostsByUserId } from '@/services/user.service';
import { ColumnDefinition } from '@/utils/filter-and-paginate';
import { PaginatedTable } from '@/components/paginated-table/paginated-table';
import OnlyTable from '@/components/only-table/only-table';
import { SearchParams, resolveSearchParams, ResolvedSearchParams } from '@/types/search-params';

export default async function PostsPage({
                                          params,
                                          searchParams,
                                        }: { params: { id: string }; searchParams: SearchParams }) {
  const resolvedParams: ResolvedSearchParams = await resolveSearchParams(searchParams);
  const posts = await getPostsByUserId(params.id);

  const allColumns: ColumnDefinition[] = [
    { key: 'id', header: 'ID' },
    { key: 'title', header: 'Post Title' },
    { key: 'body', header: 'Content' },
  ];

  return (
    <PaginatedTable
      data={posts}
      allColumns={allColumns}
      searchParams={resolvedParams}
      title={`User ${params.id} Posts`}
      baseUrl={`/users/${params.id}/posts`}
      TableComponent={OnlyTable}
    />
  );
}
