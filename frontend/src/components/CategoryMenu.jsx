import { Link, useLocation } from 'react-router-dom'
import { FaLaptop, FaFootballBall, FaFilm, FaBriefcase, FaHeartbeat, FaFlask } from 'react-icons/fa'

const categories = [
  { name: 'Technology', icon: FaLaptop, path: 'technology' },
  { name: 'Sports', icon: FaFootballBall, path: 'sports' },
  { name: 'Entertainment', icon: FaFilm, path: 'entertainment' },
  { name: 'Business', icon: FaBriefcase, path: 'business' },
  { name: 'Health', icon: FaHeartbeat, path: 'health' },
  { name: 'Science', icon: FaFlask, path: 'science' },
]

const CategoryMenu = () => {
  const location = useLocation()
  
  return (
    <div className="bg-white shadow-md py-4 mb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = location.pathname.includes(category.path)
            
            return (
              <Link
                key={category.path}
                to={`/category/${category.path}`}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                }`}
              >
                <Icon />
                <span className="font-medium">{category.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoryMenu
