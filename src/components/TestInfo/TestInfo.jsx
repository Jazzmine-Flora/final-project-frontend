import "./TestInfo.css";

function TestInfo() {
  return (
    <div className="test-info">
      <button 
        className="test-info__toggle"
        onClick={(e) => {
          const content = e.target.nextElementSibling;
          content.style.display = content.style.display === 'none' ? 'block' : 'none';
        }}
      >
        ℹ️ Test User Info
      </button>
      <div className="test-info__content" style={{ display: 'none' }}>
        <h3>Test Accounts for Reviewers:</h3>
        <div className="test-info__user">
          <strong>User 1:</strong><br />
          Email: test@example.com<br />
          Password: password123
        </div>
        <div className="test-info__user">
          <strong>User 2:</strong><br />
          Email: demo@example.com<br />
          Password: demo123
        </div>
        <p className="test-info__note">
          <small>Or create a new account - all data is stored locally for testing.</small>
        </p>
      </div>
    </div>
  );
}

export default TestInfo;
