import { useState } from "react";
import "./TestInfo.css";

function TestInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="test-info">
      <button
        type="button"
        className="test-info__toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle demo account info"
      >
        <span className="test-info__badge">Test</span>
      </button>
      {isOpen && (
        <div className="test-info__content">
          <h3 className="test-info__heading">Demo accounts</h3>
          <div className="test-info__user">
            <strong>Account 1</strong>
            <span>test@example.com / password123</span>
          </div>
          <div className="test-info__user">
            <strong>Account 2</strong>
            <span>demo@example.com / demo123</span>
          </div>
          <p className="test-info__note">
            Or sign up to create your own. Data is stored locally for this portfolio demo.
          </p>
        </div>
      )}
    </div>
  );
}

export default TestInfo;
