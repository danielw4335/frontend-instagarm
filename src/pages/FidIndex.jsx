import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadStorys, addStory, updateStory, removeStory, addStoryMsg } from '../store/actions/story.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { storyService } from '../services/story'
import { userService } from '../services/user'

import { StoryList } from '../cmps/StoryList'

export function FidIndex() {

    useEffect(() => {
        loadStorys()
    }, [])

    return (
        <main className="fid-index">
            <StoryList />
        </main>
    )
    
}