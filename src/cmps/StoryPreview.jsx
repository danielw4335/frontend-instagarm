import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { StoryHeader } from './storyHeader.jsx'
import { StoryActions } from './StoryActions.jsx'
import { StoryComments } from './StoryComments.jsx'
import { BasicModal } from './BasicModal.jsx'


export function StoryPreview({ story, from }) {
    const loggedInUser = useSelector((storeState) => storeState.userModule.user)

    const { _id, txt, imgUrl, by, likes, createdAt, comments = [] } = story
    // const loggedInUser = useSelector((storeState) => storeState.userModule.loggedinUser)

    return (
        from === 'index' ? (
            <section className="story-preview">
                <StoryHeader key={by._id} from={from} _id={_id} user={by} createdAt={createdAt} />
                <img className="story-img" src={imgUrl} alt="story" />
                <StoryActions loggedInUser={loggedInUser} story={story} from={from} />
                <StoryComments story={story} from={from} />

                <hr />
            </section>
        ) : (
            // <Link to={`/story/${_id}`} className="story-preview">
            //     <StoryHeader key={by._id} user={by} />
            //     <img className="story-img" src={imgUrl} alt="story" />
            // </Link>
            // <Link to={`/story/${_id}`} className="story-preview">
            //     <StoryHeader key={by._id} user={by} />
            //     <img className="story-img" src={imgUrl} alt="story" />
            // </Link>
            <h1>!!!no index!!!</h1>
        )
        // <div className="story-preview">
        //     <StoryHeader key={by._id} user={by} />
        //     <img className="story-img" src={imgUrl} alt="story" />
        // </div>
    )
}
