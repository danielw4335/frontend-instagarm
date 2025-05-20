import { httpService } from '../http.service'

export const chatService = {
	add,
	query,
	remove,
}

function query(filterBy) {
	var queryStr = !filterBy ? '' : `?name=${filterBy.name}&sort=anaAref`
	return httpService.get(`chat${queryStr}`)
}

async function remove(chatId) {
	await httpService.delete(`chat/${chatId}`)
}

async function add({ txt, userId }) {
	return await httpService.post(`chat`, { txt, userId })
}