import { useEffect, useState } from 'react';
import { StoryPreview } from './StoryPreview';
import { useSelector } from 'react-redux';

export function StoryList({ stories, from }) {
    const isLoading = useSelector(storeState => storeState.storyModule.isLoading)

    



    return (
        <div className={"story-list"}>
            {!isLoading && from === 'index' ?
                stories.map(story => (
                    <StoryPreview key={story._id} story={story} from={from} />
                ))
                : <div>Loading...</div>
            }
        </div>
    )
}