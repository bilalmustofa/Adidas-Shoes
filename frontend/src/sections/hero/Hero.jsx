import heroBg from '../../assets/images/hero-img.png'

function Hero() {
  return (
    <>
        <section className='w-full h-screen bg-cover bg-center flex items-center'
                  style={{backgroundImage: `url(${heroBg})`}} >
            
            <div className="ml-8 text-black mt-35 px-8">
                <h1 className="text-6xl font-black uppercase bg-gradient-to-r from-[#9A0E16] to-[#000000] bg-clip-text text-transparent">
                  ADICLUB <br /> IS SHOWING OFF.
                </h1>
                
                <p className="mt-4 text-xl max-w-xl text-white">
                  Exclusive releases for our members and more ways to unlock those things that you love
                </p>
                
                <div  className="mt-5 flex flex-col gap-6 text-white">
                  <a href="#"  className="max-w-50 text-3xl font-bold hover:text-yellow-300">
                    → SEE MORE
                  </a>
                  <a href="#"  className="max-w-50 text-3xl font-bold hover:text-yellow-300">
                    → BUY NOW
                  </a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero;