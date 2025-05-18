
export function HeaderModal({ type, setType, safetyClose, createStory }) {
    console.log(' HeaderModal type:', type)

    return (
        <main className={`header-modal-create ${type}`}>
            {type === 'upload' && (
                <>
                </>
            )}
            {type === 'cropStory' && (
                <>
                    <button className="btn-back clear-button" onClick={() => safetyClose}>Back</button>
                    <span className="modal-title crop">Crop</span>
                    <button className="btn-next clear-button" onClick={() => setType('editStory')}>Next</button>
                </>
            )}
            {type === 'editStory' && (
                <>
                    <button className="btn-back clear-button" onClick={() => setType('cropStory')}>Back</button>
                    <span className="modal-title edit">Edit</span>
                    <button className="btn-next clear-button" onClick={() => setType('createStory')}>Next</button>
                </>
            )}
            {type === 'createStory' && (
                <>
                    <button className="btn-post clear-button" onClick={() => setType('editStory')}>Back</button>
                    <span className="modal-title create">Create new post</span>
                    <button className="btn-Share clear-button" onClick={() => createStory()}>Share</button>

                </>
            )}
        </main>
    )
}
