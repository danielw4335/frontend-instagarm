export const uploadService = {
	uploadImg,
}

async function uploadImg(ev) {
	const CLOUD_NAME = 'dpwerroy4'
	const UPLOAD_PRESET = 'story_uploads'
	const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

	const formData = new FormData()
	
    // Building the request body
	formData.append('file', ev.target.files[0])
	formData.append('upload_preset', UPLOAD_PRESET)
	
    // Sending a post method request to Cloudinary API
	try {
		const res = await fetch(UPLOAD_URL, { method: 'POST', body: formData })
		const imgData = await res.json()
		console.log(' uploadImg imgData:', imgData)
		return imgData
	} catch (err) {
		console.error(err)
		throw err
	}
}