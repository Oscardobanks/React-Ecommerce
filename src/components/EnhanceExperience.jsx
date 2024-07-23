import Frame615 from '../assets/Frame 615.png'
import Frame694 from '../assets/Frame 694.png'

const EnhanceExperience = () => {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-10 mt-32 bg-black p-10">
      <div className="flex flex-col md:gap-5 gap-2">
        <p className="text-[#00FF66] font-bold text-sm mb-2">Categories</p>
        <p className="text-white md:text-6xl text-2xl font-bold">Enhance Your Music Experience</p>
        <img src={Frame615} alt="" className='w-fit my-5'/>
        <button className="text-white bg-[#00FF66] py-2 px-10 w-fit">Buy Now!</button>
      </div>
      <div>
        <img src={Frame694} alt="" className='w-full' />
      </div>
    </div>
  )
}

export default EnhanceExperience
