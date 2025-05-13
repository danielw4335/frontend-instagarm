import { useSelector } from 'react-redux'
import { removeStory } from '../store/actions/story.actions'

export function BasicModal({ type ,storyId, onClose }) {
  console.log(' BasicModal type:', type)
  if (!storyId) return null

  const user = useSelector((storeState) => storeState.userModule.user)

  function isMyStoryId(storyId, user) {
    return user?.posts?.includes(storyId)
  }

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
      <div className="modal-basic" onClick={(ev) => ev.stopPropagation()}>

        {isMyStoryId(storyId, user) && (
          <button className="modal-btn delete" onClick={onDelete}>Delete</button>
        )}
        <button className="modal-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}
