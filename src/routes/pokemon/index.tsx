import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '@/components/ui/pagination';
import { GetAllPokemonParams } from '@/types';
import { Link, createFileRoute } from '@tanstack/react-router';
import CardLoading from './-components/CardLoading';
import PokemonCard from './-components/PokemonCard';
import { usePokemonImpl } from './-usePokemonImpl';

export const Route = createFileRoute('/pokemon/')({
	component: Pokemon,
	validateSearch: (search: Record<string, unknown>): GetAllPokemonParams => {
		return {
			limit: (search.limit as number) ?? 15,
			offset: (search.offset as number) ?? 0
		};
	}
});

function Pokemon() {
	const params = Route.useSearch();

	const { data, isLoading } = usePokemonImpl({ params });

	return (
		<>
			{isLoading ? (
				<div className='grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-3'>
					{Array(15)
						.fill(0)
						.map(() => (
							<CardLoading />
						))}
				</div>
			) : (
				<div className='grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-3'>
					{data?.results.map(pokemon => (
						<PokemonCard {...pokemon} key={pokemon.name} />
					))}
				</div>
			)}

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<Link
							to='/pokemon'
							search={{
								...params,
								offset: params.offset - params.limit,
							}}
							disabled={params.offset === 0}
						>
							<PaginationPrevious />
						</Link>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href='#' isActive>
							{params.offset / params.limit + 1}
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<Link
							to='/pokemon'
							disabled={params.offset === data?.count}
							search={{
								...params,
								offset: params.offset + params.limit,
							}}
						>
							<PaginationNext />
						</Link>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</>
	)
}
