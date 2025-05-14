import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [modalState, setModalState] = useState({
    isOpen: false,
    storyId: null,
    modalType: null,
  })

  function open(storyId, modalType) {
    setModalState({ isOpen: true, storyId, modalType })
  }

  function close() {
    setModalState({ isOpen: false, storyId: null, modalType: null })
  }

function setType(modalType) {
  setModalState(prev => ({ ...prev, modalType }))
}

  return (
<ModalContext.Provider value={{ modalState, open, close, setType }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}
