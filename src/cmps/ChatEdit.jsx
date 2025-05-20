import { useState } from "react"
import { useSelector } from "react-redux"

import { addChat } from "../store/actions/chat.actions"

import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"

export function ChatEdit() {
	const users = useSelector(storeState => storeState.userModule.users)
	const [chatToEdit, setChatToEdit] = useState({ txt: '', aboutUserId: '' })

	function handleChange(ev) {
		const { name, value } = ev.target
		setChatToEdit({ ...chatToEdit, [name]: value })
	}

    async function onAddChat(ev) {
		ev.preventDefault()
		if (!chatToEdit.txt || !chatToEdit.aboutUserId) return alert('All fields are required')
            
		try {
			await addChat(chatToEdit)
			showSuccessMsg('Chat added')
			setChatToEdit({ txt: '', aboutUserId: '' })
		} catch (err) {
			showErrorMsg('Cannot add chat')
		}
	}

   return <form className="chat-edit" onSubmit={onAddChat}>
        <select onChange={handleChange} value={chatToEdit.aboutUserId} name="aboutUserId">
            <option value="">Chat about...</option>
            {users.map(user =>
                <option key={user._id} value={user._id}>
                    {user.fullname}
                </option>
            )}
        </select>
        <textarea name="txt" onChange={handleChange} value={chatToEdit.txt}></textarea>
        <button>Add</button>
    </form>

}