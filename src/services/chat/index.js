const { DEV, VITE_LOCAL } = import.meta.env

import { chatService as local } from './chat.service.local'
import { chatService as remote } from './chat.service.remote'

export const chatService = (VITE_LOCAL === 'true')? local : remote

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.chatService = chatService
