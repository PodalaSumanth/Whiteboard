import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-search">
          <input 
            type="text" 
            placeholder="Search or enter board name..." 
            className="search-input"
          />
        </div>
        <div className="header-actions">
          <button className="collab-button">
            Collab
          </button>
          <button className="profile-button">
            <div className="profile-icon"></div>
            Profile
          </button>
        </div>
      </div>
    </header>
  );
}
