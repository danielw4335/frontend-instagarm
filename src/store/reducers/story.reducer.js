export const SET_STORIES = 'SET_STORIES'
export const SET_STORY = 'SET_STORY'
export const REMOVE_STORY = 'REMOVE_STORY'
export const ADD_STORY = 'ADD_STORY'
export const UPDATE_STORY = 'UPDATE_STORY'
export const ADD_STORY_COMMENT = 'ADD_STORY_COMMENT'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
  stories: [],
  story: null,
  isLoading: false,
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
      newState = {
        ...state,
        stories,
        story: state.story && state.story._id === action.story._id
          ? { ...state.story, ...action.story }
          : state.story
      }
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
      break

    default:
      break
  }

  return newState
}
