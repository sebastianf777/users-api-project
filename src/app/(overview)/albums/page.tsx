import { getAlbums, Album } from '@/services/album.service';
import { SearchParams, resolveSearchParams, ResolvedSearchParams } from '@/types/search-params';
import { ColumnDefinition } from '@/utils/filter-and-paginate';
import { PaginatedTable } from '@/components/paginated-table/paginated-table';
import OnlyTable from '@/components/only-table/only-table';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Albums',
};


export default async function CoinGeckoPage({ searchParams }: { searchParams: SearchParams}) {
    const params: ResolvedSearchParams = await resolveSearchParams(searchParams);
    const data: Album[] = await getAlbums();

    const allColumns: ColumnDefinition[] = [
        { key: 'userId', header: 'User Id' },
        { key: 'id', header: 'Id' },
        { key: 'title', header: 'Title' },
    ];

    return (
        <PaginatedTable<Album>
            data={data}
            allColumns={allColumns}
            searchParams={params}
            title={'CoinGecko API'}
            baseUrl={'/albums'}
            TableComponent={OnlyTable}
        />
    );
}