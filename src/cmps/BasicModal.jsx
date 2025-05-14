import { useSelector } from 'react-redux'
import { addStory, removeStory } from '../store/actions/story.actions'
import { ImgUploader } from '../cmps/ImgUploader'
import { useState } from 'react'
import { useModal } from '../customHooks/ModalContext'

export function BasicModal({ type, storyId, onClose }) {
  const { setType } = useModal()
  console.log(' BasicModal type:', type)
  const user = useSelector((storeState) => storeState.userModule.user)
  const story = useSelector((storeState) => storeState.storyModule.story)
  // console.log(' BasicModal story:', story)
  // console.log(' BasicModal user:', user)
  const [imgUrl, setImgUrl] = useState(null)


  function isMyStoryId(storyId, user) {
    user?.posts?.includes(storyId)
    // console.log(' isMyStoryId storyId:', storyId)
    // console.log(' isMyStoryId user?.posts:', user)
    return true
    // return user?.posts?.includes(storyId)
  }

function onClickUploaded() {
setType('createStory')
}

async function createStory() {
  try {
    await addStory( imgUrl )
  } catch (err) {
    console.error('Failed to create story', err)
  } finally {
    onClose()
  }
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

  // console.log(' BasicModal user:', user)
  // console.log(' BasicModal storyId:', storyId)
  return (
    <main className='modal-container'>
      {type === 'options' && (
        <div className="modal-backdrop" onClick={onClose}>
          <div className="modal-basic" onClick={(ev) => ev.stopPropagation()}>

            {isMyStoryId(storyId, user) && (
              <button className="modal-btn delete" onClick={onDelete}>Delete</button>
            )}
            <button className="modal-btn" onClick={onClose}>Cancel</button>
          </div>
        </div>
      )}


      {type === 'upload' && (
        <div className="modal-backdrop-upload" onClick={onClose}>
          <div className="modal-upload" onClick={(ev) => ev.stopPropagation()}>
            <p className="modal-title">Create new post</p>

            {!imgUrl && (
              <ImgUploader onUploaded={(url) => {
                setImgUrl(url)
              setType('createStory')
              }}/>
            )}

            {imgUrl && (
              <div className="preview-phase">
                <img src={imgUrl} className="uploaded-preview" />
                <button className="modal-btn next" onClick={() => onClickUploaded()}>
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {type === 'createStory' && (
        <div className="modal-backdrop" onClick={onClose}>
          <div className="modal-create" onClick={(ev) => ev.stopPropagation()}>
            <h4 className='modal-create-title'>Crop</h4>
          <button className="modal-create-btn" onClick={() => createStory()}>Next</button>
          <img src={imgUrl} className="uploaded-preview" />
          </div>
        </div>
      )}
    </main>
  )
}
