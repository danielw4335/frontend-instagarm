import ShowMoreText from 'react-show-more-text'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const StoryComments = ({ story, from }) => {
    const { _id, txt, comments = [], likes } = story
    // const [isComment, setIsComment] = useState(false)
    // const [comment, setComment] = useState('')



    return (
        <div className="story-comments">
            {likes ? <p> {story.likes} likes</p> : ''}

            <ShowMoreText
                lines={2}
                more="more"
                less=""
                anchorClass="show-more-link"
                expanded={false}
                truncatedEndingComponent={"…"}
            >
                <p>{txt}</p>
            </ShowMoreText>
            <button className='clear-button'>
                <p>View all {comments.length} comments</p>
            </button>
            <input type="text" placeholder="Add a comment..." />
        </div>
    )
}

