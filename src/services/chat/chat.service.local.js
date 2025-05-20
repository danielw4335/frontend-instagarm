import { storageService } from '../async-storage.service'
import { userService } from '../user'

export const chatService = {
	add,
	query,
	remove,
}

function query(filterBy) {
	return storageService.query('chat')
}

async function remove(chatId) {
	await storageService.remove('chat', chatId)
}

async function add({ txt, aboutUserId }) {
	const aboutUser = await userService.getById(aboutUserId)
	const chatToAdd = {
		txt,
		byUser: userService.getLoggedinUser(),
		aboutUser: {
			_id: aboutUser._id,
			fullname: aboutUser.fullname,
			imgUrl: aboutUser.imgUrl,
		},
	}

	chatToAdd.byUser.score += 10
	await userService.update(chatToAdd.byUser)

	const addedChat = await storageService.post('chat', chatToAdd)
	return addedChat
}