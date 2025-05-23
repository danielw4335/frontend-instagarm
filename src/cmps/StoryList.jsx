import { useEffect, useState } from 'react';
import { StoryPreview } from './StoryPreview';
import { useSelector } from 'react-redux';
import { LoaderInstagram } from './LoaderInstagram';
import { SuggestedUsers } from './SuggestedUsers';

export function StoryList({ stories, from }) {
    const isLoading = useSelector(storeState => storeState.storyModule.isLoading)
    const users = useSelector(storeState => storeState.userModule.users)




    if (!stories || isLoading) return <LoaderInstagram />
    return (
        <div className={"story-list"}>
            <div className={"suggested-users-container"}>
                <SuggestedUsers users={users} />
            </div>
            <div className={"story-preview-container"}>
                {from === 'index' &&
                    stories.map(story => (
                        <StoryPreview key={story._id} story={story} from={from} />
                    )
                    )}
            </div>
        </div>
    )
}