// Mock authentication API for Stage 1.2
// This simulates backend responses without a real server

class MockAuthApi {
  constructor() {
    // Simulate some existing users
    this._users = [
      {
        email: "test@example.com",
        password: "password123",
        username: "testuser",
        _id: "user1"
      },
      {
        email: "demo@example.com", 
        password: "demo123",
        username: "demouser",
        _id: "user2"
      }
    ];
  }

  // Simulate network delay
  _simulateDelay(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Simulate successful response
  _createSuccessResponse(data) {
    return Promise.resolve({
      ok: true,
      data: data
    });
  }

  // Simulate error response
  _createErrorResponse(message, status = 400) {
    return Promise.reject({
      status: status,
      message: message
    });
  }

  // Mock user registration
  async register({ email, password, username }) {
    await this._simulateDelay(800);

    // Check if user already exists
    const existingUser = this._users.find(user => user.email === email);
    if (existingUser) {
      return this._createErrorResponse("User already exists", 409);
    }

    // Validate input
    if (!email || !password || !username) {
      return this._createErrorResponse("All fields are required", 400);
    }

    if (password.length < 6) {
      return this._createErrorResponse("Password must be at least 6 characters", 400);
    }

    // Create new user
    const newUser = {
      email,
      password, // In real app, this would be hashed
      username,
      _id: `user${Date.now()}`
    };

    this._users.push(newUser);

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;
    return this._createSuccessResponse({
      user: userWithoutPassword,
      token: `mock-token-${newUser._id}`
    });
  }

  // Mock user login
  async login({ email, password }) {
    await this._simulateDelay(800);

    // Validate input
    if (!email || !password) {
      return this._createErrorResponse("Email and password are required", 400);
    }

    // Find user
    const user = this._users.find(u => u.email === email);
    if (!user) {
      return this._createErrorResponse("User not found", 401);
    }

    // Check password
    if (user.password !== password) {
      return this._createErrorResponse("Invalid password", 401);
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return this._createSuccessResponse({
      user: userWithoutPassword,
      token: `mock-token-${user._id}`
    });
  }

  // Mock token verification
  async verifyToken(token) {
    await this._simulateDelay(300);

    if (!token || !token.startsWith('mock-token-')) {
      return this._createErrorResponse("Invalid token", 401);
    }

    // Extract user ID from token
    const userId = token.replace('mock-token-', '');
    const user = this._users.find(u => u._id === userId);

    if (!user) {
      return this._createErrorResponse("User not found", 401);
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return this._createSuccessResponse({
      user: userWithoutPassword
    });
  }

  // Mock getting current user
  async getCurrentUser(token) {
    return this.verifyToken(token);
  }
}

// Create and export instance
const mockAuthApi = new MockAuthApi();
export default mockAuthApi;
