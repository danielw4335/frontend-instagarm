import { Link } from 'react-router-dom'
import { StoryHeader } from './storyHeader.jsx'
import { StoryActions } from './StoryActions.jsx'
import { StoryComments } from './StoryComments.jsx'

export function StoryPreview({ story, from }) {
    const { _id, txt, imgUrl, by, likes, createdAt, comments = [] } = story
    return (
        from === 'index' ? (
            <section className="story-preview">
                <StoryHeader key={by._id} user={by} createdAt={createdAt} />
                <img className="story-img" src={imgUrl} alt="story" />
                <StoryActions from={from} />
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
            <h1>no index</h1>
        )
        // <div className="story-preview">
        //     <StoryHeader key={by._id} user={by} />
        //     <img className="story-img" src={imgUrl} alt="story" />
        // </div>
    )
}
