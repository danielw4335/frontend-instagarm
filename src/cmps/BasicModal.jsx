import { useSelector } from 'react-redux'
import { addStory, removeStory } from '../store/actions/story.actions'
import { ImgUploader } from '../cmps/ImgUploader'
import { useState } from 'react'
import { useModal } from '../customHooks/ModalContext'
import { StoryHeader } from './StoryHeader'
import { LocationInput } from './LocationInput'
import { HeaderModal } from './headerModal'
import { Back } from '../assets/SVG/icons'

export function BasicModal({ type, storyId, onClose }) {
  const { setType } = useModal()
  const user = useSelector((storeState) => storeState.userModule.loggedInUser)

  const [newStory, setNewStory] = useState({
    imgUrl: '',
    txt: '',
    by: user,
    loc: null
  })

  function isMyStoryId(storyId, user) {
    //!dev! return user?.posts?.includes(storyId)
    user?.posts?.includes(storyId)
    return true
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

  function safetyClose() {
    if (confirm('Are you sure you want to close?')) {
      onClose()
    }

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

  if (type === 'options') {
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

  if (type !== 'options') {
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <main className="modal-main" onClick={(ev) => ev.stopPropagation()}>
          {type === 'upload' && (
            <div className="modal-upload">
              {!newStory.imgUrl && (
                <>
                  <ImgUploader onUploaded={(url) => {
                    setNewStory(prev => ({ ...prev, imgUrl: url }))
                    setType('cropStory')
                  }} />
                </>
              )}

              {newStory.imgUrl && (
                <div className="preview-phase">
                  <img src={newStory.imgUrl} className="uploaded-preview" />
                  <button className="modal-btn next" onClick={() => setType('cropStory')}>
                    Next
                  </button>
                </div>
              )}
            </div>
          )}

          {type === 'cropStory' && (
            <div className="modal-crop">
              <div className='header-modal'>
                <button className="btn-back clear-button" onClick={() => safetyClose}><Back /></button>
                <span className="modal-title crop">Crop</span>
                <button className="btn-next clear-button" onClick={() => setType('editStory')}>Next</button>
              </div>
              <img src={newStory.imgUrl} className="crop-preview" />
            </div>
          )}

          {type === 'editStory' && (
            <div className="modal-edit">
              <div className='header-modal'>
                <button className="btn-back clear-button" onClick={() => setType('cropStory')}><Back /></button>
                <span className="modal-title edit">Edit</span>
                <button className="btn-next clear-button" onClick={() => setType('createStory')}>Next</button>
              </div>
              <img src={newStory.imgUrl} className="edit-preview" />
            </div>
          )}

          {type === 'createStory' && (
            <div className="modal-create-post">
              <div className='header-modal'>
                <button className="btn-post clear-button" onClick={() => setType('editStory')}><Back /></button>
                <span className="modal-title create">Create new post</span>
                <button className="btn-Share btn-next clear-button" onClick={() => createStory()}>Share</button>
              </div>
              <div className="left-side">
                <img src={newStory.imgUrl} className="create-preview" />
                {/* <img src="https://res.cloudinary.com/vanilla-test-images/image/upload/v1747338393/bgufj3duwiwl3vqlru2j.png" className="create-preview" /> */}
              </div>
              <div className="right-side">
                <div className="user-bar">
                  <img className="user-img" src={user.imgUrl} alt="user" />
                  <span className="username">{user.username}</span>
                </div>
                <input
                  className="create-story-input"
                  type="text"
                  maxLength={2200}
                  name="txt"
                  value={newStory.txt}
                  onChange={e => setNewStory(prev => ({ ...prev, txt: e.target.value }))}
                />
                <hr />
                <LocationInput onPlaceSelected={(place) => {
                  setNewStory(prev => ({ ...prev, loc: place }))
                }} />
              </div>
            </div>
          )}
        </main>
      </div>
    )
  }
}