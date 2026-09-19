import type { Technology } from '../types'
import TechCard from './TechCard'

type TechListProps = {
	technologies: Technology[]
	onAdd: (tech: Technology) => void
}

const TechList = ({ technologies, onAdd }: TechListProps) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
			{technologies.map((tech) => (
				<TechCard key={tech.id} tech={tech} onAdd={onAdd} />
			))}
		</div>
	)
}

export default TechList