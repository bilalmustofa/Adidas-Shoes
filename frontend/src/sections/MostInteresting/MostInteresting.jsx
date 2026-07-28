import basketBallImg from '../../assets/images/MostInterest/ball-img.png';
import blackBgShoesImg from '../../assets/images/MostInterest/blackBgShoes-img.png';
import blueBgShoesImg from '../../assets/images/MostInterest/blueBgShoes-img.png';
import redShoesImg from '../../assets/images/MostInterest/redShoes-img.png';

function MostInteresting() {
  return (
    <>
      <section className="max-w-7xl mx-auto py-5">

        <h2 className="text-3xl font-black uppercase mb-10">Most Interesting</h2>

        <div className="grid grid-cols-4 gap-8">
          <img src={basketBallImg} alt="basketBall Img" />
          <img src={redShoesImg} alt="basketBall Img" />
          <img src={blueBgShoesImg} alt="basketBall Img" />
          <img src={blackBgShoesImg} alt="basketBall Img" />
        </div>

      </section>
    </>
  )
}

export default MostInteresting;