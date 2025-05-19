import { useState, useRef, useEffect } from 'react'
import EmojiPicker from 'emoji-picker-react'

import {
  BigEmoji,
    Emoji
} from '../assets/SVG/icons'

export function EmojiPickerWrapper({ from ,onEmojiSelect }) {
  const [isOpen, setIsOpen] = useState(false)
  const emojiWrapperRef = useRef(null)

  function handleEmojiClick(event, emojiObject) {
    onEmojiSelect(emojiObject.emoji)
  }
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiWrapperRef.current && !emojiWrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen]) 

  return (
    <section className="emoji-wrapper" ref={emojiWrapperRef}>
      <button
        type="button" 
        className="emoji-btn"
        onClick={(e) => {
          e.stopPropagation() 
          setIsOpen(prev => !prev)
        }}
        title="Emoji Picker"
      >
       {from === 'index' ? <Emoji/> : <BigEmoji />} 
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
