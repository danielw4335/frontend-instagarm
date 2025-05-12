const { DEV, VITE_LOCAL } = import.meta.env

// import { getRandomIntInclusive, makeId } from '../util.service'

import { storyservice as local } from './story.service.local'
import { storyservice as remote } from './story.service.remote'

function getEmptyStory() {
    return {
        _id: '',
    }
}

function getDefaultFilter() {
    return {
        txt: '',
    }
}

console.log(VITE_LOCAL)

const service = (VITE_LOCAL === 'true') ? local : remote
export const storyservice = { getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.storyservice = storyservice
