// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachItem, onEmojiClicked} = props
  const {id, emojiName, emojiUrl} = eachItem
  const onEmojiCardClicked = () => {
    onEmojiClicked(id)
  }
  return (
    <li className="emoji-card-container">
      <button
        type="button"
        className="emoji-card-button"
        onClick={onEmojiCardClicked}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-card-img" />
      </button>
    </li>
  )
}

export default EmojiCard
