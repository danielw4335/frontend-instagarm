import { useSelector } from 'react-redux'
import { removeStory } from '../store/actions/story.actions'
import { ImgUploader } from '../cmps/ImgUploader'
import { useState } from 'react'
import { useModal } from '../customHooks/ModalContext'

export function BasicModal({ type, storyId, onClose }) {
  const { setType } = useModal()
  console.log(' BasicModal type:', type)
  if (!storyId) return null
  const user = useSelector((storeState) => storeState.userModule.user)
  const [imgUrl, setImgUrl] = useState(null)


  function isMyStoryId(storyId, user) {
    return user?.posts?.includes(storyId)
  }

function onClickUploaded(url) {
setType('createStory')
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
    <main className='modal-container'>
      {type === 'g' && (
        <div className="modal-backdrop" onClick={onClose}>
          <div className="modal-basic" onClick={(ev) => ev.stopPropagation()}>

            {isMyStoryId(storyId, user) && (
              <button className="modal-btn delete" onClick={onDelete}>Delete</button>
            )}
            <button className="modal-btn" onClick={onClose}>Cancel</button>
          </div>
        </div>
      )}


      {type === 'options' && (
        <div className="modal-backdrop-upload" onClick={onClose}>
          <div className="modal-upload" onClick={(ev) => ev.stopPropagation()}>
            <p className="modal-title">Create new post</p>

            {!imgUrl && (
              <ImgUploader onUploaded={(url) => setImgUrl(url)} />
            )}

            {imgUrl && (
              <div className="preview-phase">
                <img src={imgUrl} className="uploaded-preview" />
                <button className="modal-btn next" onClick={() => onClickUploaded(imgUrl)}>
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {type === 'createStory' && (
        <div className="modal-backdrop-upload" onClick={onClose}>
          <div className="modal-upload" onClick={(ev) => ev.stopPropagation()}>
            <p className="modal-title">Write a caption</p>
            <textarea placeholder="What's on your mind?" />
            <button className="modal-btn" onClick={() => alert('Post created!')}>Post</button>
          </div>
        </div>
      )}
    </main>
  )
}
