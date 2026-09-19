import { FiX } from 'react-icons/fi'
import type { Technology } from '../types'

type SidebarProps = {
	selected: Technology[]
	onRemove: (id: string) => void
	onRemoveAll: () => void
}

const Sidebar = ({ selected, onRemove, onRemoveAll }: SidebarProps) => {
	return (
		<div className='border border-gray-200 rounded-xl p-5 lg:sticky lg:top-24'>
			<h3 className='font-semibold text-gray-900'>Your Stack</h3>
			<p className='text-xs text-gray-500 mt-1'>
				{selected.length} Technology Selected
			</p>

			{selected.length === 0 ? (
				<p className='mt-6 text-sm text-gray-400 text-center'>
					Your stack is empty. Add a technology to get started.
				</p>
			) : (
				<ul className='mt-4 flex flex-col gap-3'>
					{selected.map((tech) => (
						<li
							key={tech.id}
							className='flex items-center justify-between border border-gray-100 rounded-lg p-2'
						>
							<div className='flex items-center gap-2'>
								<img className='h-6 w-6' src={tech.icon} alt={tech.name} />
								<div>
									<p className='text-sm font-medium text-gray-900'>{tech.name}</p>
									<p className='text-xs text-gray-500'>{tech.category}</p>
								</div>
							</div>
							<button onClick={() => onRemove(tech.id)} aria-label={`Remove ${tech.name}`} className='hover:text-red-500 transition-colors'>
								<FiX className='text-gray-400' />
							</button>
						</li>
					))}
				</ul>
			)}

			{selected.length > 0 && (
				<button
					onClick={onRemoveAll}
					className='mt-5 w-full border border-red-200 text-red-500 text-sm font-medium py-2 rounded-lg hover:bg-red-50 transition-colors'
				>
					Remove All
				</button>
			)}
		</div>
	)
}

export default Sidebar