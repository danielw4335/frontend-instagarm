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

  return (
    <ModalContext.Provider value={{ modalState, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}
