import { ArrowLongRightIcon } from "@heroicons/react/16/solid"

const Notification = () => {
  return (
	<div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3 cursor-default'>
		<p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
		<div className="inline-flex gap-1 items-center cursor-default">
			<p>Get started for Free</p>
			<ArrowLongRightIcon className="w-4 h-4 inline-flex justify-center items-center" />
		</div>
	</div>
  )
}

export default Notification