# News Explorer

A modern React-based news application that allows users to search for articles and save their favorites.

## 🚀 Live Demo

**Deployed Application:** [https://jazzmine-flora.github.io/final-project-frontend](https://jazzmine-flora.github.io/final-project-frontend)

## ✨ Features

- **Real-time News Search**: Search for articles from NewsAPI
- **User Authentication**: Register and login with secure authentication
- **Save Articles**: Bookmark articles for later reading
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Progressive Loading**: "Show more" functionality for large result sets
- **Click to Read**: Click any article card to read the full article

## 🧪 Test Accounts

For reviewers and testing:

- **Email:** test@example.com **Password:** password123
- **Email:** demo@example.com **Password:** demo123

Or create your own account - all data is stored locally.

## 🛠️ Technologies Used

- **Frontend**: React 19, React Router, Vite
- **Styling**: CSS3, Flexbox, CSS Grid
- **API**: NewsAPI for real news data
- **Storage**: Local Storage for authentication and saved articles
- **Deployment**: GitHub Pages

## 🏗️ Architecture

- **Component-based**: Modular React components
- **State Management**: React hooks (useState, useEffect)
- **Responsive Design**: Mobile-first approach
- **Mock Authentication**: Simulated backend for testing
- **Local Persistence**: User data saved locally

## 📱 Responsive Breakpoints

- **Desktop (1281px+)**: 3 cards per row
- **Tablet (861px-1280px)**: 2 cards per row  
- **Mobile (860px and below)**: 1 card per row

## 🚀 Development

### Prerequisites
- Node.js (v20.19.0 or higher)
- npm or yarn

### Local Development
```bash
# Clone the repository
git clone https://github.com/jazzmine-flora/final-project-frontend.git

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5174
```

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── App/             # Main application component
│   ├── Header/          # Site header with navigation
│   ├── Main/            # Main page with search results
│   ├── NewsCard/        # Individual article cards
│   ├── SearchForm/      # News search functionality
│   ├── About/           # About the author section
│   ├── Footer/          # Site footer
│   ├── Modals/          # Login/Register modals
│   └── ...
├── utils/               # Utility functions
│   ├── newsApi.js       # NewsAPI integration
│   ├── mockAuthApi.js   # Mock authentication
│   └── localStorage.js  # Local storage utilities
├── images/              # Static images
└── vendor/              # Third-party resources (fonts)
```

## 🎯 Stage 1.2 Implementation

This project implements all Stage 1.2 requirements:

✅ **API Integration**: Real NewsAPI with search functionality  
✅ **Response Handling**: Loading states, errors, empty results  
✅ **Backend Simulation**: Mock authentication for reviewers  
✅ **Deployment**: Live on GitHub Pages  

## 👨‍💻 Created By

**Taliba Ali Latif**  
TripleTen Practicum Software Engineering Student

---

*This project is part of the TripleTen Practicum Software Engineering course.*
