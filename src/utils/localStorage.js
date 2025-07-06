// Local storage utilities for managing saved articles and auth tokens

class LocalStorageUtil {
  // Token management
  static getToken() {
    return localStorage.getItem('newsExplorer-token');
  }

  static setToken(token) {
    localStorage.setItem('newsExplorer-token', token);
  }

  static removeToken() {
    localStorage.removeItem('newsExplorer-token');
  }

  // Saved articles management
  static getSavedArticles() {
    const saved = localStorage.getItem('newsExplorer-savedArticles');
    return saved ? JSON.parse(saved) : [];
  }

  static setSavedArticles(articles) {
    localStorage.setItem('newsExplorer-savedArticles', JSON.stringify(articles));
  }

  static addSavedArticle(article) {
    const saved = this.getSavedArticles();
    // Check if article already exists
    if (!saved.find(a => a.url === article.url)) {
      saved.push({
        ...article,
        savedAt: new Date().toISOString(),
        _id: `saved-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      });
      this.setSavedArticles(saved);
    }
    return saved;
  }

  static removeSavedArticle(articleUrl) {
    const saved = this.getSavedArticles();
    const filtered = saved.filter(a => a.url !== articleUrl);
    this.setSavedArticles(filtered);
    return filtered;
  }

  static clearSavedArticles() {
    localStorage.removeItem('newsExplorer-savedArticles');
  }

  // Search history (optional)
  static getSearchHistory() {
    const history = localStorage.getItem('newsExplorer-searchHistory');
    return history ? JSON.parse(history) : [];
  }

  static addSearchTerm(term) {
    const history = this.getSearchHistory();
    const cleanTerm = term.trim().toLowerCase();
    
    // Remove if already exists
    const filtered = history.filter(h => h !== cleanTerm);
    
    // Add to beginning
    filtered.unshift(cleanTerm);
    
    // Keep only last 10 searches
    const limited = filtered.slice(0, 10);
    
    localStorage.setItem('newsExplorer-searchHistory', JSON.stringify(limited));
    return limited;
  }

  // Clear all app data
  static clearAllData() {
    this.removeToken();
    this.clearSavedArticles();
    localStorage.removeItem('newsExplorer-searchHistory');
  }
}

export default LocalStorageUtil;
