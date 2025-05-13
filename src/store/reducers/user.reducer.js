import { userService } from '../../services/user'

export const SET_USER = 'SET_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_USERS = 'SET_USERS'
export const UPDATE_USER = 'UPDATE_USER'

const initialState = {
  user: userService.getLoggedinUser(),
  users: []
}

export function userReducer(state = initialState, action) {
  let newState = state

  switch (action.type) {
    case SET_USER:
      newState = { ...state, user: action.user }
      break

    case REMOVE_USER:
      newState = {
        ...state,
        users: state.users.filter(user => user._id !== action.userId)
      }
      break

    case SET_USERS:
      newState = { ...state, users: action.users }
      break

    case UPDATE_USER:
      newState = {
        ...state,
        users: state.users.map(user =>
          user._id === action.user._id ? action.user : user
        ),
        user: state.user && state.user._id === action.user._id
          ? action.user
          : state.user
      }
      break

    default:
      break
  }

  return newState
}
