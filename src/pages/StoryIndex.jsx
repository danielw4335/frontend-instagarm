import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { loadStories } from '../store/actions/story.actions'
import { StoryList } from '../cmps/StoryList'
import { StoryDetails } from '../cmps/StoryDetails'
import { loadUser, loadUsers, login } from '../store/actions/user.actions'
import { StoriesBar } from '../cmps/StoriesBar'
import { LoaderInstagram } from '../cmps/LoaderInstagram'


export function StoryIndex() {
  const isLoading = useSelector(storeState => storeState.userModule.isLoading)
  const stories = useSelector(storeState => storeState.storyModule.stories)

  if (!stories || isLoading) return <LoaderInstagram />
  return (
    <main className="main-story-layout">
      <StoriesBar items={stories} />
      <StoryList stories={stories} from="index" />
    </main>
  )
}
