import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './redux/noteSlice.js'

export default configureStore({
  reducer: {
    note: noteReducer,
  },
})