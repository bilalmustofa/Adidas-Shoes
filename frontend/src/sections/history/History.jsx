import historyBanner from '../../assets/images/history-img.png'

function History() {
  return (
    <>
        <section  className=" bg-[#EB7502] relative overflow-hidden h-125 mb-5 ">
              <h1 className="text-center text-7xl font-black text-white pt-10 tracking-tight">HISTORY AND GRACE</h1>

              <div className="absolute bottom-0 left-162.5 -translate-x-1/2 z-20">
                <img src={historyBanner} alt="Old Man" />
              </div>

              <div className="grid grid-cols-2 gap-x-32 px-12 mt-10">
                <p className='z-30 text-gray-200 w-120'>
                  At adidas, we believe that sports have the power tho transform lives. It's not just about keeping your body and mind fit; it's about bringing people together and creating a community of individual who share the same passion for excellence.
                </p>
                <p className="text-right z-30 text-gray-200 w-120">
                  Whether you're a runner, a basketball player, a soccer player, or someone who loves to train, you'll find a home with us, our products are designed to meet your needs, no matter what you preferred from of exercise may be.
                </p>
                <p className="mt-16 z-30 text-gray-200 w-120">
                  We draw inspiration from the athletes who push themselves to their limits every day, and from the technology we develop to help them achieve their goals. 
                </p>
                <p className="text-right mt-16 z-30 text-gray-200 w-120">
                   We're not just present on the playing field,either. You'll find the three stripes at music festival, on stages, and in the city streets.
                </p>
              </div>

              <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white w-72 z-30">
                   To improve performances. Improve lives and change the world.
              </p>
        </section>
    </>
  )
}

export default History;