import { Link } from 'react-router-dom'
import { FaNewspaper, FaHeart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <FaNewspaper className="text-3xl" />
            <div>
              <h1 className="text-2xl font-bold">InsightStream</h1>
              <p className="text-xs text-blue-200">Navigate the News Landscape</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="hover:text-blue-200 transition font-medium"
            >
              Home
            </Link>
            <Link 
              to="/favorites" 
              className="flex items-center space-x-2 hover:text-blue-200 transition font-medium"
            >
              <FaHeart />
              <span>Favorites</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
