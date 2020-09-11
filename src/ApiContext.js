import React from 'react'

export default React.createContext({
  notes: [],
  folders: [],
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {},
  setNote: () => {},
  setFolder: () => {},
  currentNote: null,
  currentFolder: null,
  fetchData: () =>{}
})