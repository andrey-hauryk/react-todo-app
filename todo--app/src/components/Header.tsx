import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <span>Tasks</span>
      </div>
      <div>
        <button>Add task</button>
      </div>
    </header>
  )
}

export default Header;