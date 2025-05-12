import { storyservice } from '../../services/story'
import { store } from '../store'
import { ADD_STORY, REMOVE_STORY, SET_STORIES, SET_STORY, UPDATE_STORY, SET_IS_LOADING, ADD_STORY_COMMENT } from '../reducers/story.reducer'

export async function loadStories(filterBy) {
    try {
        store.dispatch({ type: SET_IS_LOADING, isLoading: true })
        const stories = await storyservice.query(filterBy)
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
        const story = await storyservice.getById(storyId)
        store.dispatch(getCmdSetStory(story))
    } catch (err) {
        console.log('Cannot load story', err)
        throw err
    }
}

export async function removeStory(storyId) {
    try {
        await storyservice.remove(storyId)
        store.dispatch(getCmdRemoveStory(storyId))
    } catch (err) {
        console.log('Cannot remove story', err)
        throw err
    }
}

export async function addStory(story) {
    try {
        const savedStory = await storyservice.save(story)
        store.dispatch(getCmdAddStory(savedStory))
        return savedStory
    } catch (err) {
        console.log('Cannot add story', err)
        throw err
    }
}

export async function updateStory(story) {
    try {
        const savedStory = await storyservice.save(story)
        store.dispatch(getCmdUpdateStory(savedStory))
        return savedStory
    } catch (err) {
        console.log('Cannot save story', err)
        throw err
    }
}

// export async function addStoryMsg(storyId, txt) {
//     try {
//         const msg = await storyservice.addStoryMsg(storyId, txt)
//         store.dispatch(getCmdAddStoryMsg(msg))
//         return msg
//     } catch (err) {
//         console.log('Cannot add story msg', err)
//         throw err
//     }
// }

export async function addStoryComment(storyId, comment) {
    try {
        const updatedStory = await storyservice.addComment(storyId, comment)
        store.dispatch(getCmdUpdateStory(updatedStory))
        return updatedStory;
    } catch (err) {
        console.log('Cannot add comment to story', err)
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
    await updateStory({
        _id: 'm1oC7',
        vendor: 'Story-Good',
    })
    await removeStory('m1oC7')
    // TODO unit test addStoryMsg
}
