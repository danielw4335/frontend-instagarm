import { Link } from 'react-router-dom'

export function StoryPreview({ story }) {
    return <article className="preview">
        <header>
            <Link to={`/story/${story._id}`}>{story.vendor}</Link>
        </header>

        <p>Speed: <span>{story.speed.toLocaleString()} Km/h</span></p>
        {story.owner && <p>Owner: <span>{story.owner.fullname}</span></p>}
        
    </article>
}