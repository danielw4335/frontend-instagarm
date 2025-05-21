export const SET_CHATS = 'SET_CHATS'
export const ADD_CHAT = 'ADD_CHAT'
export const REMOVE_CHAT = 'REMOVE_CHAT'
export const UPDATE_CHAT = 'UPDATE_CHAT'

const initialState = {
  chats: [],
}

export function chatReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CHATS:
      return { ...state, chats: action.chats }
    case ADD_CHAT:
      return { ...state, chats: [action.chat, ...state.chats] }
    case UPDATE_CHAT:
      const updatedChats = state.chats.filter(chat => chat._id !== action.chat._id)
      return { ...state, chats: [action.chat, ...updatedChats] }
    case REMOVE_CHAT:
      return { ...state, chats: state.chats.filter(chat => chat._id !== action.chatId) }
    default:
      return state
  }
}
