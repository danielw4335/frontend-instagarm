import { storieservice } from '../../services/story'
import { store } from '../store'
import { ADD_STORY, REMOVE_STORY, SET_STORIES, SET_STORY, UPDATE_STORY, SET_IS_LOADING, ADD_STORY_MSG } from '../reducers/story.reducer'

export async function loadStories(filterBy) {
    try {
        store.dispatch({ type: SET_IS_LOADING, isLoading: true })
        const stories = await storieservice.query(filterBy)
        console.log(' loadStories stories:', stories)
        store.dispatch(getCmdSetStories(stories))
    } catch (err) {
        console.log('Cannot load stories', err)
        throw err
    }
    finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}

export async function loadStory(storyId) {
    try {
        const story = await storieservice.getById(storyId)
        store.dispatch(getCmdSetStory(story))
    } catch (err) {
        console.log('Cannot load story', err)
        throw err
    }
}

export async function removeStory(storyId) {
    try {
        await storieservice.remove(storyId)
        store.dispatch(getCmdRemoveStory(storyId))
    } catch (err) {
        console.log('Cannot remove story', err)
        throw err
    }
}

export async function addStory(story) {
    try {
        const savedStory = await storieservice.save(story)
        store.dispatch(getCmdAddStory(savedStory))
        return savedStory
    } catch (err) {
        console.log('Cannot add story', err)
        throw err
    }
}

export async function updateStory(story) {
    try {
        const savedStory = await storieservice.save(story)
        store.dispatch(getCmdUpdateStory(savedStory))
        return savedStory
    } catch (err) {
        console.log('Cannot save story', err)
        throw err
    }
}

export async function addStoryMsg(storyId, txt) {
    try {
        const msg = await storieservice.addStoryMsg(storyId, txt)
        store.dispatch(getCmdAddStoryMsg(msg))
        return msg
    } catch (err) {
        console.log('Cannot add story msg', err)
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
        type: ADD_STORY_MSG,
        msg
    }
}

// unitTestActions()
async function unitTestActions() {
    await loadStories()
    await addStory(storieservice.getEmptyStory())
    await updateStory({
        _id: 'm1oC7',
        vendor: 'Story-Good',
    })
    await removeStory('m1oC7')
    // TODO unit test addStoryMsg
}
