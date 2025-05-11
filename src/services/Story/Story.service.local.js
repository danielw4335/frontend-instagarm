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
    addComment
}
window.cs = storyservice


async function query() {
    let stories = await storageService.query(STORAGE_KEY)
    if (!stories || !stories.length) {
        stories = createStories()
    }
    return stories
}

function getById(storyId) {
    return storageService.get(STORAGE_KEY, storyId)
}

async function remove(storyId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, storyId)
}

async function save(story) {
    var savedStory
    if (story._id) {
        const storyToSave = {
            _id: story._id,
            speed: story.speed
        }
        savedStory = await storageService.put(STORAGE_KEY, storyToSave)
    } else {
        const storyToSave = {
            vendor: story.vendor,
            speed: story.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedStory = await storageService.post(STORAGE_KEY, storyToSave)
    }
    return savedStory
}

async function addComment(storyId, comment) {
    const story = await getById(storyId)
    if (!story.comments) story.comments = []
    story.comments.push(comment)
    await storageService.put(STORAGE_KEY, story)
    return story
}

async function createStories() {
        const defaultstories = [...Stories] 
       saveToStorage(STORAGE_KEY, defaultstories)
    return defaultstories
}