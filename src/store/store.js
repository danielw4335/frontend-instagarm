import { legacy_createStore as createStore, combineReducers } from 'redux'

import { storyReducer } from './reducers/story.reducer'
import { userReducer } from './reducers/user.reducer'
import { chatReducer } from './reducers/chat.reducer'
import { systemReducer } from './reducers/system.reducer'

const rootReducer = combineReducers({
    storyModule: storyReducer,
    userModule: userReducer,
    systemModule: systemReducer,
    chatModule: chatReducer,
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)

// For debug:
// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })