import promoBanner from '../../assets/images/promoBanner.jfif';
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

function Promotion() {
  return (
    <>
        <section className="max-w-7xl mx-auto py-10 px-8">
            <div className="flex h-125 ">

                <div className='w-[35%]'>
                    <img src={promoBanner} alt="Promotion"className="w-full h-full object-cover rounded-l-[50px]" />
                </div>

                <div className="w-[65%] bg-[#231F20] text-white p-16  flex flex-col justify-center relative rounded-r-[50px]">

                    <h1 className='text-[50px] font-bold tracking-wide absolute top-14 left-[-29%] z-10'>
                        OUTFITS FOR <br /> 
                        <span className='text-yellow-500'>BENEFITS</span>
                    </h1>
                    <h3 className='text-gray-300 tracking-wide text-lg leading-12'>
                        <span className='text-yellow-300 font-medium'>60% OFF + free shipping: </span>only for adiClub members.
                    </h3>
                    <h3 className='text-lg text-gray-300 max-w-xl leading-8'>
                        Check your account and start buying for benefits on adiWeek.
                    </h3>

                    <div className='mt-12 flex gap-6 justify-center'>
                        <a href="#" 
                           className='flex items-center gap-3 text-[27px] font-bold hover:text-yellow-400'>
                             <FiArrowRight /> BUY NOW
                        </a>
                        <a href="#" 
                           className='flex items-center gap-3 text-[27px] font-bold hover:text-yellow-400'>
                            <FiArrowDown/> WHAT IS ADIDAS?
                        </a>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Promotion;