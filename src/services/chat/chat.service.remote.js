import { httpService } from '../http.service'

export const chatService = {
	query,
	createChat,
	addMsg,
	remove,
}

function query(userId) {
	return httpService.get(`chat?userId=${userId}`)
}

async function createChat({ userIds }) {
	console.log(' createChat userIds:', userIds)
	return await httpService.post('chat', { userIds })
}

async function addMsg({ chatId, msg}) {
	return await httpService.post(`chat/${chatId}/msg`, { msg })
	// {
	// 	id,
	// 	txt,
	// 	by,
	// 	createdAt,
	// }

}

async function remove(chatId) {
	await httpService.delete(`chat/${chatId}`)
}
