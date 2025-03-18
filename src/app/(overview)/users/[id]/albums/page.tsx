import { getAlbumsByUserId } from '@/services/user.service';
import { ColumnDefinition } from '@/utils/filter-and-paginate';
import { PaginatedTable } from '@/components/paginated-table/paginated-table';
import OnlyTable from '@/components/only-table/only-table';
import { SearchParams, resolveSearchParams, ResolvedSearchParams } from '@/types/search-params';

export default async function AlbumsPage({
                                           params,
                                           searchParams,
                                         }: { params: { id: string }; searchParams: SearchParams }) {
  const resolvedParams: ResolvedSearchParams = await resolveSearchParams(searchParams);
  const albums = await getAlbumsByUserId(params.id);

  const allColumns: ColumnDefinition[] = [
    { key: 'userId', header: 'User Id' },
    { key: 'id', header: 'Id' },
    { key: 'title', header: 'Title' },
  ];

  return (
    <PaginatedTable
      data={albums}
      allColumns={allColumns}
      searchParams={resolvedParams}
      title={`User ${params.id} Albums`}
      baseUrl={`/users/${params.id}/albums`}
      TableComponent={OnlyTable}
    />
  );
}
