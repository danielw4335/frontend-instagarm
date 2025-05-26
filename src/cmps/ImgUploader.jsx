import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadService } from '../services/upload.service'
import { UploadMedia } from '../assets/SVG/icons'

export function ImgUploader({ onUploaded = null }) {
  const [imgData, setImgData] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0]
    if (!file) return

    setIsUploading(true)
    const { secure_url, height, width } = await uploadService.uploadImg({ target: { files: [file] } })
    setImgData({ url: secure_url, width, height })
    setIsUploading(false)
    onUploaded && onUploaded(secure_url)
  }, [onUploaded])

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },////only img
    multiple: false,////only one
    noClick: true,
    noKeyboard: true
  })

  return (
    <div className={`upload-preview ${isDragActive ? 'drag-over' : ''}`} {...getRootProps()}>
      <span className="modal-title crop">Create new post</span>
      <hr />
      <input {...getInputProps()} />

      {imgData?.url && <img src={imgData.url} alt="Uploaded" style={{ maxWidth: '200px' }} />}
      <UploadMedia className='upload-media-svg' />
      <span>{isUploading ? 'Uploading...' : 'Drag photos and videos here'}</span>

      <button className='upload-img-btn' type="button" onClick={open} disabled={isUploading}>
        {imgData?.url ? 'Upload Another Image' : 'Select from computer'}
      </button>
    </div>
  )
}
