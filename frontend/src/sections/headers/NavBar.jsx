import logo from '../../assets/icons/adidas-logo.png'
import { FiSearch, FiHeart, FiUser, FiShoppingBag  } from "react-icons/fi";


function NavBar() {

    const navLinks = [
        "WOMEN",
        "MEN",
        "KIDS",
        "NEWS",
        "SPORTS",
        "ADIDAS WORLD",
    ];

  return (
    <>
        <nav className="flex items-center justify-between h-20 px-10 border-b border-gray-200 bg-white">

            <div>
                <img src={logo} alt="Adidas Logo" className="h-10 cursor-pointer" />
            </div>

            <div className='flex items-center gap-8'>
                {navLinks.map((item, i) => (
                    <a 
                    key={item} 
                    href="#" 
                    className={`${i < 3 ? "font-bold" : "font-normal"}  hover:border-b-2 hover:border-black pb-1 transition-all`}>
                    {item}
                    </a>
                ))}
            </div>

            <div  className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
                <FiSearch className="text-gray-500 text-lg" />
                <input type="text" placeholder='Search'  className="bg-transparent outline-none ml-3 text-sm w-full" />
            </div>

            <div className="flex items-center gap-5 text-2xl">
                <FiUser className="cursor-pointer hover:scale-110 transition-transform" />
                <FiHeart className="cursor-pointer hover:scale-110 transition-transform" />
                <FiShoppingBag className="cursor-pointer hover:scale-110 transition-transform" />
           </div>
        </nav>
    </>
  )
}

export default NavBar;