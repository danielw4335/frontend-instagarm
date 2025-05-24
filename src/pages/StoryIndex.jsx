import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { loadStories } from '../store/actions/story.actions'
import { StoryList } from '../cmps/StoryList'
import { StoryDetails } from '../cmps/StoryDetails'
import { loadUser, loadUsers, login } from '../store/actions/user.actions'

import { LoaderInstagram } from '../cmps/LoaderInstagram'
import { SuggestedUsers } from '../cmps/SuggestedUsers'



export function StoryIndex() {
  const isLoading = useSelector(storeState => storeState.userModule.isLoading)
  const stories = useSelector(storeState => storeState.storyModule.stories)
  const users = useSelector(storeState => storeState.userModule.users)

  if (!stories || !users || isLoading) return <LoaderInstagram />
  return (
    <main className="main-story-layout">
      <div className={"suggested-users-container"}>
        <SuggestedUsers users={users} />
      </div>
      <StoryList stories={stories} from="index" />
    </main>
  )
}
