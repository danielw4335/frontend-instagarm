import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [modalState, setModalState] = useState({ isOpen: false, storyId: null })

  function open(storyId) {
    setModalState({ isOpen: true, storyId })
  }

  function close() {
    setModalState({ isOpen: false, storyId: null })
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
