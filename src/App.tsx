import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechList from './components/TechList'
import Sidebar from './components/Sidebar'
import MainLayout from './components/MainLayout'
import type { Technology } from './types'

const App = () => {
	const [technologies, setTechnologies] = useState<Technology[]>([])
	const [selected, setSelected] = useState<Technology[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch('/data.json')
			.then((res) => res.json())
			.then((data) => setTechnologies(data))
			.finally(() => setLoading(false))
	}, [])

	const handleAdd = (tech: Technology) => {
		const alreadyAdded = selected.some((item) => item.id === tech.id)
		if (alreadyAdded) return
		setSelected([...selected, tech])
	}

	const handleRemove = (id: string) => {
		setSelected(selected.filter((item) => item.id !== id))
	}

	const handleRemoveAll = () => {
		setSelected([])
	}

	return (
		<div>
			<Navbar />
			<Hero />

			<section className='container mx-auto px-4 py-10'>
				<h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
					Explore the <span className='text-brand-gradient'>Technologies</span>
				</h2>
				<p className='mt-2 text-gray-600'>
					Pick one technology per category to build your ideal stack.
				</p>

				<div className='mt-8'>
					{loading ? (
						<p>Loading technologies...</p>
					) : (
						<MainLayout
							left={
								<TechList
									technologies={technologies}
									selectedIds={selected.map((item) => item.id)}
									onAdd={handleAdd}
								/>
							}
							right={
								<Sidebar
									selected={selected}
									onRemove={handleRemove}
									onRemoveAll={handleRemoveAll}
								/>
							}
						/>
					)}
				</div>
			</section>
		</div>
	)
}

export default App