import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import NewsCard from '../components/NewsCard'
import CategoryMenu from '../components/CategoryMenu'
import Loader from '../components/Loader'
import { getTopHeadlines, searchNews } from '../services/newsApi'
import { getFavorites, addFavorite, removeFavorite } from '../services/api'

const Home = () => {
  const [articles, setArticles] = useState([])
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    loadNews()
    loadFavorites()
  }, [])

  const loadNews = async () => {
    setLoading(true)
    try {
      const data = await getTopHeadlines()
      setArticles(data)
      // Save articles to localStorage for article view
      data.forEach(article => {
        localStorage.setItem(`article_${article.url}`, JSON.stringify(article))
      })
    } catch (error) {
      console.error('Error loading news:', error)
    }
    setLoading(false)
  }

  const loadFavorites = async () => {
    try {
      const data = await getFavorites()
      setFavorites(data)
    } catch (error) {
      console.error('Error loading favorites:', error)
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      loadNews()
      setIsSearching(false)
      return
    }
    
    setLoading(true)
    setIsSearching(true)
    try {
      const data = await searchNews(searchQuery)
      setArticles(data)
    } catch (error) {
      console.error('Error searching news:', error)
    }
    setLoading(false)
  }

  const handleToggleFavorite = async (article) => {
    const isFav = favorites.some(fav => fav.url === article.url)
    
    if (isFav) {
      const favToRemove = favorites.find(fav => fav.url === article.url)
      await removeFavorite(favToRemove.id)
      setFavorites(favorites.filter(fav => fav.id !== favToRemove.id))
    } else {
      const newFav = await addFavorite({ ...article, id: Date.now() })
      setFavorites([...favorites, newFav])
    }
  }

  const isFavorite = (article) => {
    return favorites.some(fav => fav.url === article.url)
  }

  return (
    <div>
      <CategoryMenu />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {isSearching ? `Search Results for "${searchQuery}"` : 'Top Headlines'}
          </h2>
          
          <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Search
            </button>
          </form>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard
                key={article.url || index}
                article={{ ...article, id: article.url }}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={isFavorite(article)}
              />
            ))}
          </div>
        )}

        {!loading && articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
