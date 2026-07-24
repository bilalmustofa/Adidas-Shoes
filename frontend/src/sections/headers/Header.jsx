import NavBar from './NavBar.jsx';
import TopBar from './TopBar.jsx';

function Header() {
  return (
    <>
    <div className='fixed top-0 left-0 w-full z-50'>
        <TopBar />
        <NavBar />
    </div>
    </>
  )
}

export default Header;