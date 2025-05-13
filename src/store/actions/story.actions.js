import { storyservice } from '../../services/story'
import { store } from '../store'
import { ADD_STORY, REMOVE_STORY, SET_STORIES, SET_STORY, UPDATE_STORY, SET_IS_LOADING, ADD_STORY_COMMENT } from '../reducers/story.reducer'
import { UPDATE_USER } from '../reducers/user.reducer'
import { userService } from '../../services/user'

export async function loadStories(filterBy) {
    try {
        store.dispatch({ type: SET_IS_LOADING, isLoading: true })
        const stories = await storyservice.query(filterBy)
        store.dispatch({ type: SET_STORIES, stories })
    } catch (err) {
        console.log('Cannot load stories', err)
        throw err
    } finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}

export async function loadStory(storyId) {
    try {
        const story = await storyservice.getById(storyId)
        store.dispatch({ type: SET_STORY, story })
    } catch (err) {
        console.log('Cannot load story', err)
        throw err
    }
}

export async function removeStory(storyId) {
    try {
        await storyservice.remove(storyId)
        store.dispatch({ type: REMOVE_STORY, storyId })
    } catch (err) {
        console.log('Cannot remove story', err)
        throw err
    }
}

export async function addStory(story) {
    try {
        const savedStory = await storyservice.save(story)
        store.dispatch({ type: ADD_STORY, story: savedStory })
        return savedStory
    } catch (err) {
        console.log('Cannot add story', err)
        throw err
    }
}

export async function updateStory(story) {
    try {
        const savedStory = await storyservice.save(story)
        store.dispatch({ type: UPDATE_STORY, story: savedStory })
        return savedStory
    } catch (err) {
        console.log('Cannot save story', err)
        throw err
    }
}

export async function addStoryComment(storyId, comment) {
    try {
        const updatedStory = await storyservice.addComment(storyId, comment)
        store.dispatch({ type: UPDATE_STORY, story: updatedStory })
        return updatedStory
    } catch (err) {
        console.log('Cannot add comment to story', err)
        throw err
    }
}

export async function toggleLike(story, user) {
    try {
        // Update story with like
        const updatedStory = { ...story }
        if(!updatedStory.likes) updatedStory.likes = []

        const userIdxInStory = updatedStory.likes.indexOf(user._id)
        if (userIdxInStory === -1) updatedStory.likes.push(user._id)
        else updatedStory.likes.splice(userIdxInStory, 1)

        const savedStory = await storyservice.save(updatedStory)
        store.dispatch({ type: UPDATE_STORY, story: savedStory })

        // Update user with liked story
        const updatedUser = { ...user }
        if(!updatedUser.likedStoryIds) updatedUser.likedStoryIds = []

        const storyIdxInUser = updatedUser.likedStoryIds.indexOf(story._id)
        if (storyIdxInUser === -1) updatedUser.likedStoryIds.push(story._id)
        else updatedUser.likedStoryIds.splice(storyIdxInUser, 1)
        
        const savedUser = await userService.update(updatedUser)
        store.dispatch({ type: UPDATE_USER, user: savedUser })
        
        return { updatedStory: savedStory, updatedUser: savedUser }
    } catch (err) {
        console.log('Cannot toggle like', err)
        throw err
    }
}

// Command Creators:
function getCmdSetStories(stories) {
    return {
        type: SET_STORIES,
        stories
    }
}
function getCmdSetStory(story) {
    return {
        type: SET_STORY,
        story
    }
}
function getCmdRemoveStory(storyId) {
    return {
        type: REMOVE_STORY,
        storyId
    }
}
function getCmdAddStory(story) {
    return {
        type: ADD_STORY,
        story
    }
}
function getCmdUpdateStory(story) {
    return {
        type: UPDATE_STORY,
        story
    }
}
function getCmdAddStoryMsg(msg) {
    return {
        type: ADD_STORY_COMMENT,
        msg
    }
}
function getCmdAddStoryComment(comment) {
    return {
        type: ADD_STORY_COMMENT,
        comment
    }
}

// unitTestActions()
async function unitTestActions() {
    await loadStories()
    await addStory(storyservice.getEmptyStory())
    await updateStory({ _id: 'm1oC7', vendor: 'Story-Good' })
    await removeStory('m1oC7')
    // TODO unit test addStoryMsg
}
