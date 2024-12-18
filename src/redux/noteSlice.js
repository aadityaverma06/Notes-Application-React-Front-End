import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = action.payload;
      const present = state.notes.findIndex(
        (item) => item.title === note.title
      );
      if (present < 0 && note.title!="" && note.content!="") {
        state.notes.push(note);
        localStorage.setItem("notes", JSON.stringify(state.notes));
        toast.success("Note Successfully Created");
      } 
      else if(note.title==""){
        toast.error("Title field can't be empty");
      }
      else if(note.content==""){
        toast.error("Content field can't be empty");
      }
      else {
        toast.error("Note with the Given Title already exists");
      }
    },
    updateNote: (state, action) => {
      const note = action.payload;
      const index = state.notes.findIndex(
        (item) => item.id === note.id
      );
      if (index >= 0) {
        state.notes[index] = note;
        localStorage.setItem("notes", JSON.stringify(state.notes));
        toast.success("Note Successfully Updated");
      } 
      else {
        toast.error("Note does not exist");
      }
    },
    resetNotes: (state) => {
      state.notes = [];
      localStorage.removeItem("notes");
    },
    DeleteNote: (state, action) => {
      const note = action.payload;
      const index = state.notes.findIndex(
        (item) => item.id === note
      );
      if (index >= 0) {
        state.notes.splice(index,1);
        localStorage.setItem("notes", JSON.stringify(state.notes));
        toast.success("Note Successfully Deleted");
      } 
    },
  },
});


// Action creators are generated for each case reducer function
export const { addNote, updateNote, resetNotes, DeleteNote } =
  noteSlice.actions;

export default noteSlice.reducer;
