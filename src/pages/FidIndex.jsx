import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadStories, addStory, updateStory, removeStory, addStoryMsg } from '../store/actions/story.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { storyservice } from '../services/story'
import { userService } from '../services/user'

import { StoryList } from '../cmps/StoryList'

export function FidIndex() {

    useEffect(() => {
        loadStories()
    }, [])

    return (
        <main className="fid-index">
            <StoryList from={'index'} />
        </main>
    )

}