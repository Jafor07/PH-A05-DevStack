import { FiStar } from 'react-icons/fi'
import type { Technology } from '../types'

type TechCardProps = {
	tech: Technology
	isAdded: boolean
	onAdd: (tech: Technology) => void
}

const TechCard = ({ tech, isAdded, onAdd }: TechCardProps) => {
	return (
		<div className='border border-gray-200 rounded-xl p-5 flex flex-col'>
			<div className='flex items-start justify-between'>
				<img className='h-10 w-10' src={tech.icon} alt={tech.name} />
				<span className='text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full'>
					{tech.badge}
				</span>
			</div>

			<h3 className='mt-4 font-semibold text-gray-900'>{tech.name}</h3>
			<p className='mt-2 text-sm text-gray-500 flex-1'>{tech.description}</p>

			<div className='mt-4 flex items-center gap-2 text-xs text-gray-500'>
				<span className='bg-gray-100 px-2 py-1 rounded'>{tech.category}</span>
				<span className='bg-gray-100 px-2 py-1 rounded'>{tech.difficulty}</span>
				<span className='flex items-center gap-1 ml-auto'>
					<FiStar className='text-yellow-500' />
					{tech.rating}
				</span>
			</div>

			<button
				onClick={() => onAdd(tech)}
				disabled={isAdded}
				className={
					isAdded
						? 'mt-4 bg-gray-100 text-gray-400 text-sm font-medium py-2 rounded-lg cursor-not-allowed'
						: 'mt-4 bg-gray-900 text-white text-sm font-medium py-2 rounded-lg'
				}
			>
				{isAdded ? 'Added' : 'Add to Stack'}
			</button>
		</div>
	)
}

export default TechCard