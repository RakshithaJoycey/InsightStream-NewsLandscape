import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Category from './pages/Category'
import Favorites from './pages/Favorites'
import ArticleView from './pages/ArticleView'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/article/:id" element={<ArticleView />} />
      </Routes>
    </div>
  )
}

export default App
