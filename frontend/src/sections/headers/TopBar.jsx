import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

function TopBar() {

   const announcements = [
       "MOTHERS DAY ADIDAS | ALL THE BEST FOR YOUR MOTHER",
       "EXPRESS WITH MOVE AND CREATIVITY SEE MORE HERE",
       "NEW COLLABS FOR THIS WEEK.CHECK OUT THE ADICLUB FOR MORE "
   ]

   const [currentMessage, setCurrentMessage] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % announcements.length);
    }, 2000);

    return () => clearInterval(interval);

   }, [])
   
  return (
    <>
        <div className="flex items-center justify-center gap-2 bg-black text-yellow-400 py-2">
            <a href="#">{announcements[currentMessage]}</a>
            <FiChevronDown size={18} />
        </div>
    </>
  )
}

export default TopBar;