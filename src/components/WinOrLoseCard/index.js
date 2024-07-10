// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {winorlose, isWon, playGameAgain} = props
  const heading = isWon ? 'You Won' : 'You Lose'
  const scoreType = isWon ? 'Best Score' : 'Score'
  const image = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="win-or-lose-continer">
      <div className="win-or-lose-score-continer ">
        <h1 className="win-or-lose-your-score">{heading}</h1>
        <div>
          <p className="win-or-lose-score">{scoreType}</p>
          <p className="win-or-lose-displayscore">{winorlose}/12</p>
        </div>
        <button
          className="paly-again-button"
          type="button"
          onClick={playGameAgain}
        >
          Play Again
        </button>
      </div>
      <img src={image} alt="win or lose" className="win-or-lose-img" />
    </div>
  )
}

export default WinOrLoseCard
