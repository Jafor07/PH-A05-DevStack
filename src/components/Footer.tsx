import logo from '../assets/logo-text.png'

const Footer = () => {
	return (
		<footer className='border-t border-gray-100 mt-16'>
			<div className='max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
				<div className='text-center md:text-left'>
					<img className='h-8 mx-auto md:mx-0' src={logo} alt='Dev Stack logo' />
					<p className='mt-3 text-sm text-gray-500 max-w-xs mx-auto md:mx-0'>
						Curated tools, technologies, and resources for developers
						building modern software.
					</p>
					<div className='flex items-center justify-center md:justify-start gap-3 mt-4 text-sm text-gray-500'>
						<a href='#' className='hover:text-gray-900 transition-colors'>GitHub</a>
						<span className='text-gray-300'>·</span>
						<a href='#' className='hover:text-gray-900 transition-colors'>Twitter</a>
						<span className='text-gray-300'>·</span>
						<a href='#' className='hover:text-gray-900 transition-colors'>LinkedIn</a>
					</div>
				</div>

				<div className='hidden md:block'>
					<h4 className='text-sm font-semibold text-gray-900'>Product</h4>
					<ul className='mt-3 flex flex-col gap-2 text-sm text-gray-500'>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Home</a></li>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Technologies</a></li>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Projects</a></li>
					</ul>
				</div>

				<div className='hidden md:block'>
					<h4 className='text-sm font-semibold text-gray-900'>Company</h4>
					<ul className='mt-3 flex flex-col gap-2 text-sm text-gray-500'>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>About</a></li>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Contact</a></li>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Careers</a></li>
					</ul>
				</div>

				<div className='hidden md:block'>
					<h4 className='text-sm font-semibold text-gray-900'>Legal</h4>
					<ul className='mt-3 flex flex-col gap-2 text-sm text-gray-500'>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Privacy Policy</a></li>
						<li><a href='#' className='hover:text-gray-900 transition-colors'>Terms of Service</a></li>
					</ul>
				</div>
			</div>

			<div className='border-t border-gray-100 py-6'>
				<div className='max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400'>
					<p>© 2026 Dev Stack. All rights reserved.</p>
					<div className='flex items-center gap-4'>
						<a href='#' className='hover:text-gray-600 transition-colors'>Privacy</a>
						<a href='#' className='hover:text-gray-600 transition-colors'>Terms</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer