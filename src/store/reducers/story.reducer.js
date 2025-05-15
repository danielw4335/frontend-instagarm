export const SET_STORIES = 'SET_STORIES'
export const SET_STORY = 'SET_STORY'
export const REMOVE_STORY = 'REMOVE_STORY'
export const ADD_STORY = 'ADD_STORY'
export const UPDATE_STORY = 'UPDATE_STORY'
export const ADD_STORY_COMMENT = 'ADD_STORY_COMMENT'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_DETAILS = 'SET_DETAILS'
export const SET_INDEX = 'SET_INDEX'

const initialState = {
    stories: [],
    story: null,
    isLoading: false,
    isDetails: false,
    isIndex: true,
}

export function storyReducer(state = initialState, action) {
    let newState = state
    let stories

    switch (action.type) {
        case SET_STORIES:
            newState = { ...state, stories: action.stories }
            break
        case SET_STORY:
            newState = { ...state, story: action.story }
            break
        case REMOVE_STORY:
            const lastRemovedStory = state.stories.find(story => story._id === action.storyId)
            stories = state.stories.filter(story => story._id !== action.storyId)
            newState = { ...state, stories, lastRemovedStory }
            break
        case ADD_STORY:
            newState = { ...state, stories: [...state.stories, action.story] }
            break
        case UPDATE_STORY:
            stories = state.stories.map(story =>
                story._id === action.story._id
                    ? { ...story, ...action.story }
                    : story
            )
            newState = { ...state, stories };
            break
        case SET_DETAILS:
            newState = { ...state, isDetails: action.isDetails }
            break
        case SET_INDEX:
            newState = { ...state, isIndex: action.isIndex }
            break
        case ADD_STORY_COMMENT:
            if (action.comment && state.story) {
                newState = {
                    ...state,
                    story: {
                        ...state.story,
                        comments: [...(state.story.comments || []), action.comment]
                    }
                }
            }
            break

        case SET_IS_LOADING:
            newState = {
                ...state,
                isLoading: action.isLoading
            }
        default:
    }
    return newState
}

// unitTestReducer()

function unitTestReducer() {
    var state = initialState
    const story1 = { _id: 'b101', vendor: 'Story ' + parseInt('' + Math.random() * 10), speed: 12, owner: null, msgs: [] }
    const story2 = { _id: 'b102', vendor: 'Story ' + parseInt('' + Math.random() * 10), speed: 13, owner: null, msgs: [] }

    state = storyReducer(state, { type: SET_STORIES, stories: [story1] })
    console.log('After SET_STORIES:', state)

    state = storyReducer(state, { type: ADD_STORY, story: story2 })
    console.log('After ADD_STORY:', state)

    state = storyReducer(state, { type: UPDATE_STORY, story: { ...story2, vendor: 'Good' } })
    console.log('After UPDATE_STORY:', state)

    state = storyReducer(state, { type: REMOVE_STORY, storyId: story2._id })
    console.log('After REMOVE_STORY:', state)

    state = storyReducer(state, { type: SET_STORY, story: story1 })
    console.log('After SET_STORY:', state)

    const msg = { id: 'm' + parseInt('' + Math.random() * 100), txt: 'Some msg', by: { _id: 'u123', fullname: 'test' } }
    state = storyReducer(state, { type: ADD_STORY_COMMENT, storyId: story1._id, msg })
    console.log('After ADD_STORY_COMMENT:', state)
}

