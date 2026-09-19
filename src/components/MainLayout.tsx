import type { ReactNode } from 'react'

type MainLayoutProps = {
	left: ReactNode
	right: ReactNode
}

const MainLayout = ({ left, right }: MainLayoutProps) => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
			<div className='lg:col-span-3'>{left}</div>
			<div className='lg:col-span-1'>{right}</div>
		</div>
	)
}

export default MainLayout