import { storageService } from '../async-storage.service'
import { makeId, saveToStorage } from '../util.service'
import { userService } from '../user'
import { Stories } from '../../data/story'

const STORAGE_KEY = 'story'

export const storyservice = {
    query,
    getById,
    save,
    remove,
    addComment,
    getEmptyStory,
    update
}
window.cs = storyservice

async function query(filterBy = {}) {
    let stories = await storageService.query(STORAGE_KEY)
    if (!stories || !stories.length) {
        stories = createStories()
    }
    if (filterBy.user){
        stories = stories.filter(story => story.by._id === filterBy.user)
    }
    return stories
}

function getById(storyId) {
    return storageService.get(STORAGE_KEY, storyId)
}

async function update(storyToUpdate) {
    const story = await storageService.get(STORAGE_KEY, storyToUpdate._id)
    const updatedStory = { ...story, ...storyToUpdate }
    await storageService.put(STORAGE_KEY, updatedStory)
    return updatedStory
}

async function remove(storyId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, storyId)
}

function getEmptyStory() {
    return {
        txt: '',
        imgUrl: '',
        createdAt: Date.now(),
        by: userService.getLoggedInUser(),
        loc: null,
        comments: [],
        likedBy: [],
        tags: []
    }
}

async function save(story) {
    const storyToSave = { ...story }

    if (story._id) {
        return await storageService.put(STORAGE_KEY, storyToSave)
    } else {
        storyToSave._id = makeId()
        storyToSave.createdAt = Date.now()
        storyToSave.by = userService.getLoggedInUser()
        storyToSave.comments = []
        storyToSave.likedBy = []
        storyToSave.tags = []
        return await storageService.post(STORAGE_KEY, storyToSave)
    }
}

async function addComment(storyId, comment) {
    const story = await getById(storyId)
    if (!story.comments) story.comments = []
    story.comments.push(comment)
    await storageService.put(STORAGE_KEY, story)
    return story
}

async function createStories() {
  const defaultStories = [...Stories]
  for (const story of defaultStories) {
    await storageService.post(STORAGE_KEY, story)
  }
  return defaultStories
}