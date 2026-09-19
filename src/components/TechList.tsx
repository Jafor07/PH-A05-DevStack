import type { Technology } from '../types'
import TechCard from './TechCard'

type TechListProps = {
	technologies: Technology[]
	selectedIds: string[]
	onAdd: (tech: Technology) => void
}

const TechList = ({ technologies, selectedIds, onAdd }: TechListProps) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
			{technologies.map((tech) => (
				<TechCard
					key={tech.id}
					tech={tech}
					isAdded={selectedIds.includes(tech.id)}
					onAdd={onAdd}
				/>
			))}
		</div>
	)
}

export default TechList