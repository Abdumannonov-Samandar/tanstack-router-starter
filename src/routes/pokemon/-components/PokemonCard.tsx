import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { capitalizeString, cn, mapTypeColor } from '@/lib/utils'
import { GetAllPokemonData } from '@/types'
import { useState } from 'react'
import { usePokemonDetailData } from '../-hooks/usePokemonDetailData'
import CardLoading from './CardLoading'

const PokemonCard = ({ name }: GetAllPokemonData) => {
	const { data, isLoading } = usePokemonDetailData({ name })
	const [hovered, setHovered] = useState(false)

	if (isLoading) {
		return <CardLoading />
	}

	return (
		<Card
			className='cursor-pointer aspect-square hover:scale-105 duration-100 hover:bg-yellow-200'
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<CardHeader>
				<div className='flex items-center justify-center'>
					<img
						src={
							hovered ? data?.sprites.front_shiny : data?.sprites.front_default
						}
						alt={data?.name}
						className='w-[128px] aspect-square  duration-100 opacity-100'
					/>
				</div>
			</CardHeader>
			<CardContent>
				<h1 className='font-bold text-center mt-[-1rem]'>
					{capitalizeString(name)}
				</h1>
				<div className='flex justify-center gap-2'>
					{(data?.types ?? []).map((val, index) => (
						<p
							key={index}
							className={cn([
								'px-2 mt-1 text-sm font-bold text-white rounded-md bg-slate-500',
								mapTypeColor(val.type.name),
							])}
						>
							{capitalizeString(val.type.name)}
						</p>
					))}
				</div>
			</CardContent>
		</Card>
	)
}

export default PokemonCard
