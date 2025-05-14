import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

export function EmojiPickerWrapper({ onEmojiClick }) {
  const [showPicker, setShowPicker] = useState(false)

  return (
    <div className="emoji-wrapper">
      <button onClick={() => setShowPicker(prev => !prev)}>😀</button>
      {showPicker && (
        <div className="emoji-popup">
          <EmojiPicker
            disableSearchBar
            disableSkinTonePicker
            native
            onEmojiClick={(event, emojiObject) => {
              onEmojiClick(emojiObject.emoji)
              setShowPicker(false)
            }}
          />
        </div>
      )}
    </div>
  )
}
