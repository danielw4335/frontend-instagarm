import { storyservice } from '../../services/story'
import { store } from '../store'
import { ADD_STORY, REMOVE_STORY, SET_STORIES, SET_STORY, UPDATE_STORY, SET_IS_LOADING, ADD_STORY_COMMENT, SET_INDEX, SET_DETAILS } from '../reducers/story.reducer'
import { UPDATE_USER } from '../reducers/user.reducer'
import { userService } from '../../services/user'

export async function loadStories(filterBy) {
    try {
        store.dispatch({ type: SET_IS_LOADING, isLoading: true })
        const stories = await storyservice.query(filterBy)
        store.dispatch({ type: SET_STORIES, stories })
		console.log('Actions loadStories stories:', stories)
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

export async function setIsDetails(isDetails) {
    try {
        console.log(' setIsDetails isDetails:', isDetails)
        store.dispatch({ type: SET_DETAILS, isDetails })
    } catch (err) {
        console.log('Cannot set details', err)
        throw err
    }
}

export async function setIsIndex(isIndex) {
    try {
        store.dispatch({ type: SET_INDEX, isIndex })
    } catch (err) {
        console.log('Cannot set index', err)
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

export async function addStory(newStory) {
  const story = { 
    ...storyservice.getEmptyStory(), 
    ...newStory 
  }
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

export async function toggleLike(story, user, isLiked) {
    console.log(' toggleLike isLiked:', isLiked)
    console.log(' toggleLike user:', user)
    console.log(' toggleLike story:', story)
    try {
        // ! Update story
        const updatedStory = { ...story }
        if (!updatedStory.likedBy) updatedStory.likedBy = []

        const userIdxInStory = updatedStory.likedBy.findIndex(u => u._id === user._id)
        const alreadyLiked = userIdxInStory !== -1

        if (isLiked && !alreadyLiked) {
            updatedStory.likedBy.push({
                _id: user._id,
                username: user.username,
                fullname: user.fullname,
                imgUrl: user.imgUrl
            })
        } else if (!isLiked && alreadyLiked) {
            updatedStory.likedBy.splice(userIdxInStory, 1)
        }

        const savedStory = await storyservice.save(updatedStory)
        store.dispatch({ type: UPDATE_STORY, story: savedStory })

        // ! Update user
        const updatedUser = { ...user }
        if (!updatedUser.likedStoryIds) updatedUser.likedStoryIds = []

        const storyIdxInUser = updatedUser.likedStoryIds.indexOf(story._id)
        const userAlreadyLiked = storyIdxInUser !== -1

        if (isLiked && !userAlreadyLiked) {
            updatedUser.likedStoryIds.push(story._id)
        } else if (!isLiked && userAlreadyLiked) {
            updatedUser.likedStoryIds.splice(storyIdxInUser, 1)
        }

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
