import { getTodosByUserId } from '@/services/user.service';
import { ColumnDefinition } from '@/utils/filter-and-paginate';
import { PaginatedTable } from '@/components/paginated-table/paginated-table';
import OnlyTable from '@/components/only-table/only-table';
import { SearchParams, resolveSearchParams, ResolvedSearchParams } from '@/types/search-params';

export default async function TodosPage({
                                          params,
                                          searchParams,
                                        }: { params: { id: string }; searchParams: SearchParams }) {
  const resolvedParams: ResolvedSearchParams = await resolveSearchParams(searchParams);
  const todos = await getTodosByUserId(params.id);

  const allColumns: ColumnDefinition[] = [
    { key: 'id', header: 'ID' },
    { key: 'title', header: 'Todo Title' },
    { key: 'completed', header: 'Completed' },
  ];

  return (
    <PaginatedTable
      data={todos}
      allColumns={allColumns}
      searchParams={resolvedParams}
      title={`User ${params.id} Todos`}
      baseUrl={`/users/${params.id}/todos`}
      TableComponent={OnlyTable}
    />
  );
}
