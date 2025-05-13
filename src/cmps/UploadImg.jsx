// import { useState } from 'react'

// export function ImgUploader() {
//   const [imgUrl, setImgUrl] = useState(null)

//   async function UploadImg(ev) {
//     const CLOUD_NAME = 'dpwerroy4'
//     const UPLOAD_PRESET = 'toy_uploads'
//     const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
//     const FORM_DATA = new FormData()

//     FORM_DATA.append('file', ev.target.files[0])
//     FORM_DATA.append('upload_preset', UPLOAD_PRESET)

//     try {
//       const res = await fetch(UPLOAD_URL, {
//         method: 'POST',
//         body: FORM_DATA,
//       })
//       const { url } = await res.json()
//       setImgUrl(url)
//     } catch (err) {
//       console.error('err upload img', err)
//     }
//   }

//   return (
//     <div className="flex flex-col items-center">
//       <input type="file" onChange={onUploadImg} />
//       {imgUrl && <img src={imgUrl} alt="Uploaded" className="max-w-xs rounded shadow" />}
//     </div>
//   )
// }



