# InsightStream - Navigate the News Landscape

A modern, full-stack news aggregator application built with React, Tailwind CSS, and JSON-Server.

## Features

- Browse latest news headlines
- Filter news by categories (Technology, Sports, Entertainment, Business, Health, Science)
- Search functionality
- Save articles to favorites (offline access)
- Detailed article view
- Responsive design
- Share articles

## Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- React Icons

### Backend
- JSON-Server (for local data storage)

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository
2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

## Running the Application

### Start Backend (JSON-Server)
```bash
cd backend
npm start
```
Backend will run on http://localhost:5000

### Start Frontend (React)
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:3000

## Project Structure

```
InsightStream/
├── backend/
│   ├── db.json              # JSON database for favorites
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── App.css
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── NewsCard.jsx
│       │   ├── CategoryMenu.jsx
│       │   └── Loader.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Category.jsx
│       │   ├── Favorites.jsx
│       │   └── ArticleView.jsx
│       └── services/
│           ├── api.js        # JSON-Server API calls
│           └── newsApi.js    # News API integration
└── README.md
```

## Using Real News API

The application currently uses mock data. To integrate with a real news API:

1. Get an API key from [NewsAPI.org](https://newsapi.org/)
2. Open `frontend/src/services/newsApi.js`
3. Uncomment the real API implementation at the bottom
4. Replace `YOUR_NEWS_API_KEY` with your actual API key
5. Comment out or remove the mock data functions

## Features in Detail

### Home Page
- Displays top headlines
- Search bar for finding specific news
- Category navigation menu

### Category Pages
- Filter news by specific categories
- Same layout as home page

### Favorites
- Save articles for offline reading
- Stored locally using JSON-Server
- Add/remove favorites with heart icon

### Article View
- Full article details
- Share functionality
- Save to favorites
- Link to original source

## Customization

### Adding More Categories
Edit `frontend/src/components/CategoryMenu.jsx` to add new categories.

### Styling
Modify `frontend/tailwind.config.js` for theme customization.

## License

MIT

## Author

Built with ❤️ for news enthusiasts
