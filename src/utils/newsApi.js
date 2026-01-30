// News API utility functions
class NewsApi {
  constructor() {
    // Use proxy URL for production, direct API for development
    this._baseUrl =
      import.meta.env.PROD
        ? "https://nomoreparties.co/news/v2/everything"
        : "https://newsapi.org/v2/everything";

    // Replace 'your-api-key-here' with your actual NewsAPI key
    this._apiKey = "0251a7a65d3c49e0b33cbd82745faccc";
  }

  // Check if response is ok, if not throw error
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // Get current date in YYYY-MM-DD format
  _getCurrentDate() {
    return new Date().toISOString().split("T")[0];
  }

  // Get date 7 days ago in YYYY-MM-DD format
  _getSevenDaysAgo() {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date.toISOString().split("T")[0];
  }

  // Search for news articles
  searchNews(query) {
    const url = `${this._baseUrl}?q=${encodeURIComponent(query)}&apiKey=${
      this._apiKey
    }&from=${this._getSevenDaysAgo()}&to=${this._getCurrentDate()}&pageSize=100`;

    return fetch(url).then(this._checkResponse);
  }
}

// Create and export instance
const newsApi = new NewsApi();
export default newsApi;
