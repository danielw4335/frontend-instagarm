const { DEV, VITE_LOCAL } = import.meta.env
console.log(' VITE_LOCAL:', VITE_LOCAL)
console.log(' DEV:', DEV)

// import { getRandomIntInclusive, makeId } from '../util.service'

import { storyservice as local } from './Story.service.local'
import { storyservice as remote } from './Story.service.remote'

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
