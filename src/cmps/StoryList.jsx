import { useEffect, useState } from 'react';
import { StoryPreview } from './StoryPreview';
import { loadStories } from '../store/actions/story.actions';
import { useSelector } from 'react-redux';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export function StoryList({ stories, from }) {
    // const { loggedinUser } = useSelector((storeState) => storeState.userModule)
    const isLoading = useSelector(storeState => storeState.storyModule.isLoading)

    const [ isDetails, setIsDetails ] = useState(false)

useEffect(() => {
  const target = document.querySelector('body');
  if (isDetails && target) disableBodyScroll(target);
  else enableBodyScroll(target)
}, [isDetails])

    return (
        <section className={`story-list ${isDetails ? 'none-scroll' : ''}`}>
            {!isLoading && from === 'index' ?
                stories.map(story => (
                    <StoryPreview key={story._id} setIsDetails={setIsDetails} story={story} from={from} />
                ))
                : <div>Loading...</div>
            }
        </section>
    )
}