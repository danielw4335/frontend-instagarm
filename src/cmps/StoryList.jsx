import { useEffect, useState } from 'react';
import { StoryPreview } from './StoryPreview';
import { loadStorys } from '../store/actions/story.actions';
import { useSelector } from 'react-redux';

export function StoryList() {
    const { storys } = useSelector((storeState) => storeState.storyModule)
    // const { loggedinUser } = useSelector((storeState) => storeState.userModule)

return (
        <section>
            {storys.length === 0 ? (
                <p>No stories</p>
            ) : (
                storys.map(story => (
                    <StoryPreview key={story._id} story={story} />
                ))
            )}
        </section>
    )
}