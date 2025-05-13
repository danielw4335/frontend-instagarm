import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { StoryHeader } from './storyHeader.jsx'
import { StoryActions } from './StoryActions.jsx'
import { StoryComments } from './StoryComments.jsx'
import { loadStory } from '../store/actions/story.actions.js'
import { useEffect } from 'react'


export function StoryPreview({ story ,from }) {
    const loggedInUser = useSelector((storeState) => storeState.userModule.user)
    const newStory = useSelector((storeState) => storeState.storyModule.story)
    
    useEffect(() => {
        loadStory(story._id)
    }, [])
    if(!newStory)return <div>Loading...</div>
        
        const { _id, txt, imgUrl, by, likes, createdAt, comments = [] } = newStory
    

    return (
        from === 'index' ? (
            <section className="story-preview">
                <StoryHeader key={by._id} from={from} user={by} createdAt={createdAt} />
                <img className="story-img" src={imgUrl} alt="story" />
                <StoryActions loggedInUser={loggedInUser} story={newStory} from={from} />
                <StoryComments story={newStory} from={from} />
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
