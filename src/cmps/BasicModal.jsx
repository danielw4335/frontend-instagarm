import { useSelector } from 'react-redux'
import { addStory, removeStory } from '../store/actions/story.actions'
import { ImgUploader } from '../cmps/ImgUploader'
import { useState } from 'react'
import { useModal } from '../customHooks/ModalContext'
import { StoryHeader } from './StoryHeader'
import { LocationInput } from './LocationInput'

export function BasicModal({ type, storyId, onClose }) {
  const { setType } = useModal()
  console.log(' BasicModal type:', type)
  const user = useSelector((storeState) => storeState.userModule.user)
  const story = useSelector((storeState) => storeState.storyModule.story)
  // console.log(' BasicModal story:', story)
  // console.log(' BasicModal user:', user)
  const [newStory, setNewStory] = useState(
    {
      "imgUrl": '',
      "txt": '',
      "by": user,
    })
  console.log(' BasicModal newStory:', newStory)

  function isMyStoryId(storyId, user) {
    user?.posts?.includes(storyId)
    return true
  }

  function onClickUploaded() {
    setType('cropStory')
  }

  async function createStory() {
    try {
      await addStory(newStory)
    } catch (err) {
      console.error('Failed to create story', err)
    } finally {
      onClose()
    }
  }

//  return {
//         txt: '',
//         imgUrl: '',
//         createdAt: Date.now(),
//         by: userService.getLoggedinUser(),
//         loc: null,
//     }

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

            {!newStory.imgUrl && (
              <ImgUploader onUploaded={(url) => {
                setNewStory(prev => ({ ...prev, imgUrl: url }))
                setType('cropStory')
              }} />
            )}

            {newStory.imgUrl && (
              <div className="preview-phase">
                <img src={newStory.imgUrl} className="uploaded-preview" />
                <button className="modal-btn next" onClick={() => onClickUploaded()}>
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {type === 'cropStory' && (
        <div className="modal-backdrop" onClick={onClose}>
          <div className="modal-crop" onClick={(ev) => ev.stopPropagation()}>
            <h4 className='modal-crop-title'>Crop</h4>
            <button className="modal-crop-btn" onClick={() => setType('editStory')}>Next</button>
            <img src={newStory.imgUrl} className="crop-preview" />
          </div>
        </div>
      )}
      {type === 'editStory' && (
        <div className="modal-backdrop" onClick={onClose}>
          <div className="modal-edit" onClick={(ev) => ev.stopPropagation()}>
            <h4 className='modal-edit-title'>Edit</h4>
            <button className="modal-edit-btn" onClick={() => setType('createStory')}>Next</button>
            <img src={newStory.imgUrl} className="edit-preview" />
          </div>
        </div>
      )}
      {type === 'createStory' && (
        <div className="modal-backdrop" onClick={onClose}>
          <div className="modal-create-post" onClick={(ev) => ev.stopPropagation()}>
            <div className="left-side">
              <img src={newStory.imgUrl} className="create-preview" />
            </div>
            <div className="right-side">
              <button className="btn-post clear-button" onClick={() => createStory()}>Share</button>
              <h4 className="modal-title">Create new post</h4>
              <div className="user-bar">
                <StoryHeader from={'modalCreat'} user={user} createdAt={0} />
              </div>
              <textarea
                className="create-story-input"
                maxLength={2200}
                value={newStory.txt}
                onChange={({ target }) => setNewStory(prev => ({ ...prev, txt: target.value }))}
              ></textarea>
            </div>
            <LocationInput onPlaceSelected={(place) => {
              setNewStory(prev => ({ ...prev, loc: place }))
            }} />
          </div>
        </div>
      )}
    </main>
  )
}
