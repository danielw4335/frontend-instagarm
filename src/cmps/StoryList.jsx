import { useEffect, useState } from 'react';
import { StoryPreview } from './StoryPreview';
import { useSelector } from 'react-redux';
import { LoaderInstagram } from './LoaderInstagram';

export function StoryList({ stories, from }) {
    const isLoading = useSelector(storeState => storeState.storyModule.isLoading)




    if (!stories || isLoading) return <LoaderInstagram />
    return (
        <div className={"story-list"}>
            {from === 'index' &&  
                stories.map(story => (
            <StoryPreview key={story._id} story={story} from={from} />
            )
            )}
        </div>
    )
}