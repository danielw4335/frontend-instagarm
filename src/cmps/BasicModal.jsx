import { removeStory } from '../store/actions/story.actions'

export function BasicModal({ storyId, onClose }) {
  if (!storyId) return null

  async function onDelete() {
    try {
      await removeStory(storyId)
    } catch (err) {
      console.error('Failed to delete story', err)
    } finally {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(ev) => ev.stopPropagation()}>
        <button className="modal-btn delete" onClick={onDelete}>Delete</button>
        <button className="modal-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}
