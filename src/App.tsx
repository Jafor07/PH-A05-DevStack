import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
		if (alreadyAdded) {
			toast.info(`${tech.name} is already in your stack`)
			return
		}
		setSelected([...selected, tech])
		toast.success(`${tech.name} added to your stack`)
	}

	const handleRemove = (id: string) => {
		const tech = selected.find((item) => item.id === id)
		setSelected(selected.filter((item) => item.id !== id))
		if (tech) toast.warn(`${tech.name} removed from your stack`)
	}

	const handleRemoveAll = () => {
		setSelected([])
		toast.warn('Your stack has been cleared')
	}

	return (
		<div>
			<ToastContainer position='top-right' autoClose={2000} />
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