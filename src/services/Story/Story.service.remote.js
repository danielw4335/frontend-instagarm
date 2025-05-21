import { httpService } from '../http.service'

export const storyservice = {
    query,
    getById,
    save,
    remove,
    addComment,
    getEmptyStory,
}

async function query(filterBy = { txt: '' }) {
    return httpService.get(`story`, filterBy)
}

function getById(storyId) {
    return httpService.get(`story/${storyId}`)
}

async function remove(storyId) {
    return httpService.delete(`story/${storyId}`)
}
async function save(story) {
    let savedStory
    if (story._id) {
        console.log('put')
        savedStory = await httpService.put(`story/${story._id}`, story)
    } else {
        console.log('post')
        savedStory = await httpService.post('story', story)
    }
    return savedStory
}

async function addComment(storyId, comment) {
    return httpService.post(`story/${storyId}/comment`, comment)
}

function getEmptyStory() {
    return {
        txt: '',
        imgUrl: '',
        createdAt: Date.now(),
        by: userService.getLoggedinUser(),
        comments: [],
        likedBy: [],
    }
}