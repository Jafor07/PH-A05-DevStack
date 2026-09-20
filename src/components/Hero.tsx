import banner from '../assets/banner-stack.png'

const Hero = () => {
	return (
		<section className='max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-10'>
			<div className='flex-1 text-center lg:text-left'>
				<h1 className='text-4xl md:text-5xl font-bold leading-tight text-gray-900'>
					Build Your Ideal <br />
					<span className='text-brand-gradient'>Development Stack</span>
				</h1>

				<p className='mt-5 text-gray-600 max-w-lg mx-auto lg:mx-0'>
					Explore frontend, backend, database, and tooling options, compare
					them side by side, and put together the stack that fits your
					<br />
					next project.
				</p>

				<div className='mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4'>
					<button className='brand-gradient text-white font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity'>
						Explore Technologies
					</button>
					<button className='border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-full hover:bg-gray-50 transition-colors'>
						Learn More
					</button>
				</div>
			</div>

			<div className='flex-1 flex justify-center'>
				<img className='w-full max-w-md' src={banner} alt='Development stack illustration' />
			</div>
		</section>
	)
}

export default Hero