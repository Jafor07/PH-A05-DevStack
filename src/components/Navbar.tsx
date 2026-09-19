import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/logo-text.png'

const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

const Navbar = () => {
	const [open, setOpen] = useState(false)

	return (
		<header className='sticky top-0 z-50 bg-white border-b border-gray-100'>
			<nav className='container mx-auto flex items-center justify-between px-4 py-4'>
				<img className='h-8' src={logo} alt='Dev Stack logo' />

				{/* desktop links */}
				<ul className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-700'>
					{links.map((link) => (
						<li key={link}>
							<a href='#' className='hover:text-pink-500 transition-colors'>{link}</a>
						</li>
					))}
				</ul>

				{/* desktop auth buttons */}
				<div className='hidden md:flex items-center gap-4'>
					<button className='text-sm font-medium text-gray-700'>Sign In</button>
					<button className='brand-gradient text-white text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity'>
						Sign Up
					</button>
				</div>

				{/* mobile hamburger */}
				<button
					className='md:hidden text-2xl text-gray-700'
					onClick={() => setOpen(!open)}
					aria-label='Toggle menu'
				>
					{open ? <FiX /> : <FiMenu />}
				</button>
			</nav>

			{/* mobile menu */}
			{open && (
				<ul className='md:hidden flex flex-col gap-4 px-4 pb-4 text-sm font-medium text-gray-700'>
					{links.map((link) => (
						<li key={link}>
							<a href='#' onClick={() => setOpen(false)}>
								{link}
							</a>
						</li>
					))}
					<li>
						<button className='brand-gradient text-white w-full py-2 rounded-full'>
							Sign Up
						</button>
					</li>
				</ul>
			)}
		</header>
	)
}

export default Navbar