import { useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import NewsCard from '../components/NewsCard'
import Loader from '../components/Loader'
import { getFavorites, removeFavorite } from '../services/api'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadFavorites()
  }, [])

  const loadFavorites = async () => {
    setLoading(true)
    try {
      const data = await getFavorites()
      setFavorites(data)
    } catch (error) {
      console.error('Error loading favorites:', error)
    }
    setLoading(false)
  }

  const handleRemoveFavorite = async (article) => {
    try {
      await removeFavorite(article.id)
      setFavorites(favorites.filter(fav => fav.id !== article.id))
    } catch (error) {
      console.error('Error removing favorite:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-6">
        <FaHeart className="text-3xl text-red-500" />
        <h2 className="text-3xl font-bold text-gray-800">Your Saved Articles</h2>
      </div>

      {loading ? (
        <Loader />
      ) : favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              onToggleFavorite={handleRemoveFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FaHeart className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No saved articles yet</p>
          <p className="text-gray-400 mt-2">Start saving articles to read them later!</p>
        </div>
      )}
    </div>
  )
}

export default Favorites
