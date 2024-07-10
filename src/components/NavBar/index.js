// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGameisGoing, highscore, score} = props

  return (
    <nav className="nav-bar-bg-container">
      <div className="nav-bar-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-game-text">Emoji Game</h1>
      </div>
      {isGameisGoing && (
        <div className="nav-bar-score-container">
          <p className="nav-bar-score">Score: {score}</p>
          <p className="nav-bar-score">Top Score: {highscore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
