import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { loadStories } from '../store/actions/story.actions'
import { StoryList } from '../cmps/StoryList'
import { StoryDetails } from '../cmps/StoryDetails'

export function FidIndex() {
  const stories = useSelector(storeState => storeState.storyModule.stories)
  const [selectedStory, setSelectedStory] = useState(null)

  const { storyId } = useParams()

  useEffect(() => {
    loadStories()
  }, [])

  useEffect(() => {
    if (storyId && stories.length) {
      const story = stories.find(story => story._id === storyId)
      setSelectedStory(story || null)
    } else {
      setSelectedStory(null)
    }
  }, [storyId, stories])

  return (
    <section className="fid-index">
      <StoryList stories={stories} from="index" />
      {selectedStory && (
        <StoryDetails  key={selectedStory._id} story={selectedStory} setSelectedStory={setSelectedStory} nav={'/'} />
      )}
    </section>
  )
}
