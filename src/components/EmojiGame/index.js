/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    isGameisGoing: true,
    emojiIdList: [],
    score: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGame = currentScore => {
    const {score} = this.state
    let newScore = score
    if (currentScore > newScore) {
      newScore = currentScore
    }
    this.setState({
      score: newScore,
      isGameisGoing: false,
    })
  }

  onEmojiClicked = id => {
    const {emojiIdList} = this.state
    const {emojisList} = this.props
    const emojiLength = emojiIdList.length
    if (emojiIdList.includes(id)) {
      this.finishGame(emojiLength)
    } else {
      if (emojiIdList.length === emojisList.length - 1) {
        this.finishGame(emojisList.length)
      }
      this.setState(prevState => ({
        emojiIdList: [...prevState.emojiIdList, id],
      }))
    }
  }

  gettingEmojies = () => {
    const randomEmojiesList = this.shuffledEmojisList()
    return (
      <ul className="emojies-list-container">
        {randomEmojiesList.map(eachItem => (
          <EmojiCard
            eachItem={eachItem}
            key={eachItem.id}
            onEmojiClicked={this.onEmojiClicked}
          />
        ))}
      </ul>
    )
  }

  gettingWinorLoseCard = () => {
    const {emojiIdList} = this.state
    const {emojisList} = this.props
    const isWon = emojiIdList.length === emojisList.length
    return (
      <WinOrLoseCard
        winorlose={emojiIdList.length}
        isWon={isWon}
        playGameAgain={this.playGameAgain}
      />
    )
  }

  playGameAgain = () => {
    this.setState({
      emojiIdList: [],
      isGameisGoing: true,
    })
  }

  render() {
    const {isGameisGoing, score, emojiIdList} = this.state
    return (
      <div>
        <NavBar
          isGameisGoing={isGameisGoing}
          highscore={score}
          score={emojiIdList.length}
        />
        <div className="emoji-game-bg-container">
          {isGameisGoing ? this.gettingEmojies() : this.gettingWinorLoseCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
