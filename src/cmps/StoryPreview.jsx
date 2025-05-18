import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { StoryHeader } from './StoryHeader.jsx'
import { StoryActions } from './StoryActions.jsx'
import { StoryComments } from './StoryComments.jsx'
import { BasicModal } from './BasicModal.jsx'


export function StoryPreview({ story, from }) {
    const loggedInUser = useSelector((storeState) => storeState.userModule.loggedInUser)
    // const isIndex = useSelector((storeState) => storeState.storyModule.isIndex)

    const { _id, txt, imgUrl, by, likes, createdAt, comments = [] } = story
    return (
        from === 'index' && (
            <section className="story-preview">
                <StoryHeader key={by._id} from={from} _id={_id} user={by} createdAt={createdAt} />
                <img className="story-img" src={imgUrl} alt="story" />
                <StoryActions loggedInUser={loggedInUser} story={story} from={from} />
                <StoryComments story={story} from={from}  />

                <hr />
            </section>
        ) 
        // <div className="story-preview">
        //     <StoryHeader key={by._id} user={by} />
        //     <img className="story-img" src={imgUrl} alt="story" />
        // </div>
    )
}
