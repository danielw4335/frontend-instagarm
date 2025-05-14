import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

export function EmojiPickerWrapper({ onEmojiSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleEmojiClick(event, emojiObject) {
    onEmojiSelect(emojiObject.emoji)
  }

  return (
    <section className="emoji-wrapper">
      <button
        className="emoji-btn"
        onClick={() => setIsOpen(prev => !prev)}
        title="Emoji Picker"
      >
        🙂
      </button>

      {isOpen && (
        <div className="emoji-popup">
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            disableSearchBar
            disableAutoFocus
            skinTonesDisabled
            native
          />
        </div>
      )}
    </section>
  )
}
