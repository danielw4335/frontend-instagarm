import { useEffect, useState } from 'react';
import { StoryPreview } from './StoryPreview';
import { loadStories } from '../store/actions/story.actions';
import { useSelector } from 'react-redux';

export function StoryList({ stories, from }) {
    // const { loggedinUser } = useSelector((storeState) => storeState.userModule)
    const isLoading = useSelector(storeState => storeState.storyModule.isLoading)
    

    return (
        <section className="story-list">
            {!isLoading && from === 'index' ?
                stories.map(story => (
                    <StoryPreview key={story._id} story={story} from={from} />
                ))
                : <div>Loading...</div>
            }
        </section>
    )
}