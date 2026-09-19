import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import logo from '../assets/logo-text.png'

const Footer = () => {
	return (
		<footer className='border-t border-gray-100 mt-16'>
			<div className='container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
				<div>
					<img className='h-8' src={logo} alt='Dev Stack logo' />
					<p className='mt-3 text-sm text-gray-500 max-w-xs'>
						Curated tools, technologies, and resources for developers
						building modern software.
					</p>
					<div className='flex items-center gap-4 mt-4 text-gray-500 text-lg'>
						<a href='#' aria-label='GitHub'>
							<FiGithub />
						</a>
						<a href='#' aria-label='Twitter'>
							<FiTwitter />
						</a>
						<a href='#' aria-label='LinkedIn'>
							<FiLinkedin />
						</a>
					</div>
				</div>

				<div>
					<h4 className='text-sm font-semibold text-gray-900'>Product</h4>
					<ul className='mt-3 flex flex-col gap-2 text-sm text-gray-500'>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Home</a></li>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Technologies</a></li>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Projects</a></li>
					</ul>
				</div>

				<div>
					<h4 className='text-sm font-semibold text-gray-900'>Company</h4>
					<ul className='mt-3 flex flex-col gap-2 text-sm text-gray-500'>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>About</a></li>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Contact</a></li>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Careers</a></li>
					</ul>
				</div>

				<div>
					<h4 className='text-sm font-semibold text-gray-900'>Legal</h4>
					<ul className='mt-3 flex flex-col gap-2 text-sm text-gray-500'>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Privacy Policy</a></li>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Terms of Service</a></li>
					</ul>
				</div>
			</div>

			<div className='border-t border-gray-100 py-6 text-center text-xs text-gray-400'>
				© 2026 Dev Stack. All rights reserved.
			</div>
		</footer>
	)
}

export default Footer